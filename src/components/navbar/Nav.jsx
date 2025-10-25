import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">My <span className='text-orange-400'>Blogs</span></a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://img.icons8.com/?size=100&id=MmupZtPbnw66&format=png&color=000000" alt="" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Nav;