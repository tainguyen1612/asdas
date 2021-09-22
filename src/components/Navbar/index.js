import $ from 'jquery';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';
import './styles.scss';

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitLogout = () => {
    dispatch(logout());
    history.push('/auth/login');
  };

  useEffect(() => {
    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');
    let searchBtn = document.querySelector('.bx-search');

    btn.onclick = function () {
      sidebar.classList.toggle('active');
    };
    // searchBtn.onclick = function () {
    //   sidebar.classList.toggle('active');
    // };

    const pathname = window.location.pathname.split('/');
    let currentElement = $(
      `a[href="${'/' + pathname[1] + (pathname.length > 2 ? '/' + pathname[2] : '')}"]`
    );
    currentElement.addClass('active');

    $('.nav_list li a').bind('click', function () {
      $('.nav_list li a').removeClass('active');
      $(this).addClass('active');
    });
  });

  return (
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <i className="bx bx-bracket"></i>
          <div className="logo_name">CGV Cinemas</div>
        </div>
        <i className="bx bx-menu" id="btn" />
      </div>
      <ul className="nav_list">
        {/* <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
        <li>
          <Link to="/dashboard">
            <i className="bx bx-grid-alt" />
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/dashboard/movies">
            <i className="bx bx-movie-play"></i>
            <span className="links_name">Movie</span>
          </Link>
          <span className="tooltip">Movie</span>
        </li>
        <li>
          <Link to="/dashboard/cineplexs">
            <i className="bx bxs-collection"></i>
            <span className="links_name">Cineplex</span>
          </Link>
          <span className="tooltip">Cineplex</span>
        </li>
        <li>
          <Link to="/dashboard/cinemas">
            <i className="bx bx-tv"></i>
            <span className="links_name">Cinema</span>
          </Link>
          <span className="tooltip">Cinema</span>
        </li>
        <li>
          <Link to="/dashboard/showtimes">
            <i className="bx bx-time-five"></i>
            <span className="links_name">Show Time</span>
          </Link>
          <span className="tooltip">Show Time</span>
        </li>
        <li>
          <Link to="/dashboard/tickets">
            <i className="bx bxs-coupon"></i>
            <span className="links_name">Ticket</span>
          </Link>
          <span className="tooltip">Ticket</span>
        </li>
        <li>
          <Link to="/dashboard/users">
            <i className="bx bx-user" />
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to="/dashboard/statistics">
            <i className="bx bx-bar-chart"></i>
            <span className="links_name">Statistic</span>
          </Link>
          <span className="tooltip">Statistic</span>
        </li>
        <li>
          <Link to="/dashboard/settings">
            <i className="bx bx-cog" />
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img
              src="https://play-lh.googleusercontent.com/dVQ6d8I7XDOkr72-jcAUHsCfQ_ih9p9HUaca82obM6LlmJOKAA8BuY776Xns40Nifg"
              alt="cgv"
            />
            <div className="name_job">
              <div className="name">Tai Nguyen Admin</div>
              <div className="job">Admin</div>
            </div>
          </div>
          <Link to="/" onClick={onSubmitLogout}>
            <p>
              LogOut
              <i className="bx bx-log-out" id="log_out" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
