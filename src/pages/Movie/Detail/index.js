import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieBySlugSelector, getMovieComment } from '../../../redux/selectors/movieSelector';
import { getCommentByUser, getMovieBySlugAction } from '../../../redux/actions/movieActions';
import moment from 'moment';
import ModalForm from '../components/ModalForm';
import './detail.scss';
import axios from 'axios';

function MovieDetail() {
  const { slug } = useParams();
  const movie = useSelector(getMovieBySlugSelector);
  const comment = useSelector(getMovieComment);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  const [userComment, setUserComment] = useState({
    email: user ? user.email : '',
    comment: '',
    slug: slug,
    dateComment: '',
  });

  useEffect(() => {
    dispatch(getCommentByUser(slug));
    dispatch(getMovieBySlugAction(slug, history));

    return () => {
      dispatch({
        type: 'REMOVE_MOVIE_DETAIL',
      });
      dispatch({
        type: 'REMOVE_COMMENT_MOVIE',
      });
    };
  }, [dispatch, slug, history]);

  const getYoutubeVideoId = (url) => {
    if (!url) {
      return null;
    }

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const VideoIframe = React.memo(({ src, height }) => (
    <iframe
      className="px-0 mb-0"
      title={movie.title}
      controls
      height={height}
      allowFullScreen
      src={src}
    />
  ));

  async function addComment(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3004/comment', { ...userComment });
      if (data) {
        window.location.reload();
        alert('Create Faculty Success', 'success');
      } else {
        alert('create comment fail');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleComment(e) {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;
    const newData = { ...userComment, comment: e.target.value, dateComment: dateTime };
    setUserComment(newData);
  }
  return (
    <main className="flex-shrink-0">
      {/* <ScrollToTopOnMount /> */}
      <Container className="w-60">
        <Row>
          <Col md={3} className="px-0">
            <div>
              <Image src={movie.poster} height={345} className="img-cover w-100"></Image>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="fw-bold">{movie.title}</h5>
            </div>
            <hr className="my-1" />
            <div>
              <span className="fw-bold">Đạo diễn: </span>
              <span>{movie.director}</span>
            </div>
            <div>
              <span className="fw-bold">Diễn viên: </span>
              <span>{movie.actor}</span>
            </div>
            <div>
              <span className="fw-bold">Thể loại: </span>
              <span>{movie.genre}</span>
            </div>
            <div>
              <span className="fw-bold">Khởi chiếu: </span>
              <span>{moment(movie.release_date).format('DD/MM/YYYY')}</span>
            </div>
            <div>
              <span className="fw-bold">Thời lượng: </span>
              <span>{movie.running_time} phút</span>
            </div>
            {/* <div>
              <span className="fw-bold">Ngôn ngữ: </span>
              <span>Tiếng Anh - Phụ đề Tiếng Việt</span>
            </div> */}
            {movie.state === 'now-showing' ? (
              <div className="mt-2">
                <ModalForm movie={movie} isShow={false} />
              </div>
            ) : (
              ''
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <p className="px-0 mb-0">{movie.description}</p>
        </Row>
        <Row className="mt-2 text-center">
          <VideoIframe
            height={444}
            src={`https://www.youtube.com/embed/${getYoutubeVideoId(movie.trailer)}`}
          />
        </Row>
        <Row className="mt-2 text-center">
          <h1>Comment</h1>
          {comment.map((el, index) => (
            <div key={index} className="comment mt-4">
              <img
                src="https://i.imgur.com/yTFUilP.jpg"
                alt=""
                className="rounded-circle"
                width="40"
                height="40"
              />
              <h4>{el.email}</h4> <span>{el.dateComment}</span> <br />
              <p>{el.comment}</p>
            </div>
          ))}
        </Row>
        <Row className="mt-2 text-center" className={!user ? 'd-none' : 'd-block'}>
          <h1>Add your Comment</h1>
          <form onSubmit={(e) => addComment(e)}>
            <div className="comment-area">
              <textarea
                className="form-control"
                placeholder="Your comment"
                type="text"
                rows="4"
                id="comment"
                value={userComment.comment}
                onChange={handleComment}></textarea>
            </div>
            <button type="submit" className="btn btn-success send btn-sm">
              Send <i className="fa fa-long-arrow-right ml-1"></i>
            </button>
          </form>
        </Row>
      </Container>
    </main>
  );
}

export default MovieDetail;
