import React, { useEffect, useState } from "react";
import style from "./HomePage.module.css";

import { SiCountingworkspro } from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { PiLayoutThin } from "react-icons/pi";
import { PiCodesandboxLogoLight } from "react-icons/pi";

import TaskCreatePage from "../TaskCreatePages/TaskCreatePage";
import BoardPage from "../../Pages/BoardPage/BoardPage";
import AnyalyticsPage from "../../Pages/AnyalyticsPage/AnyalyticsPage";
import SettingsPage from "../../Pages/SettingsPage/SettingsPage";
import { useSelector, useDispatch } from "react-redux";

import {
  createTask,
  deleteTask,
  editTask,
  logOut,
  setUserLogoutTrue,
  shareTaskLink,
  toggle,
  toggleCreateTask,
} from "../../Redux/Board/BoardSlice";
import DeleteAlertBox from "../DeleteAlertPages/DeleteAlertBox";
import EditTask from "../EditTaskPages/EditTask";

import ShareLinkAlert from "../ShareLinkAlertPages/ShareLinkAlert";
import LogoutAlert from "../LogoutAlertPages/LogoutAlert";

const HomePage = () => {
  const [selectSection, setSelectSection] = useState("board");
  const [showCreateTask, setShowCreateTask] = useState(false);
  const taskStatus = useSelector(createTask);
  const userDeleteTask = useSelector(deleteTask);
  const userEditTask = useSelector(editTask);
  const userShareTaskLink = useSelector(shareTaskLink);
  const userLogout = useSelector(logOut);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUserLogoutTrue());
  };
  const boardToggle = useSelector(toggle);
  const handleClickSection = (section) => {
    setSelectSection(section);
  };

  useEffect(() => {
    setShowCreateTask(taskStatus);
  }, [boardToggle]);

  return (
    <>
      {showCreateTask && (
        <div className={style.note_sec}>
          <TaskCreatePage />
        </div>
      )}
      {userEditTask?.task?._id && (
        <div className={style.edit_sec}>
          <EditTask />
        </div>
      )}
      {userShareTaskLink && (
        <div className={style.share_link_sec}>
          <ShareLinkAlert />
        </div>
      )}
      {userDeleteTask?.id && (
        <div className={style.delete_sec}>
          <DeleteAlertBox />
        </div>
      )}
      {userLogout && (
        <div className={style.user_logout}>
          <LogoutAlert />
        </div>
      )}

      
      <section
        className={`${style.home_main_container} ${
          (showCreateTask ||
            userDeleteTask?.id ||
            userShareTaskLink ||
            userLogout ||
            userEditTask?.task?._id) &&
          style.crate_task_on
        }`}
      >
        <div className={style.left_section}>
          <div className={style.section_up}>
            <div className={style.brand_name_section}>
              <div className={style.brand_name}>
                <span className={style.brand_icon}>
                  <PiCodesandboxLogoLight size={25} />
                </span>
                <span className={style.brand_text}>Pro Manage</span>
              </div>
            </div>

            <div className={style.routes_container}>
              <div
                className={`${style.route_section} ${
                  selectSection === "board" && style.select_section
                }`}
                onClick={() => handleClickSection("board")}
              >
                <span className={style.route_icon}>
                  <PiLayoutThin size={25} />
                </span>
                <span className={style.route_text}>Board</span>
              </div>
              <div
                className={`${style.route_section} ${
                  selectSection === "anyalytics" && style.select_section
                }`}
                onClick={() => handleClickSection("anyalytics")}
              >
                <span className={style.route_icon}>
                  <GoDatabase size={25} />
                </span>
                <span className={style.route_text}>Anyalytics</span>
              </div>
              <div
                onClick={() => handleClickSection("settings")}
                className={`${style.route_section} ${
                  selectSection === "settings" && style.select_section
                }`}
              >
                <span className={style.route_icon}>
                  <IoSettingsOutline size={25} />
                </span>
                <span className={style.route_text}>Settings</span>
              </div>
            </div>
          </div>
          <div className={style.section_down}>
            <div
              onClick={() => handleLogout()}
              className={style.logout_section}
            >
              <span className={style.logout_icon}>
                <IoLogOutOutline />
              </span>
              <span className={style.logout_text}>Logout</span>
            </div>
          </div>
        </div>
        <div className={style.right_section}>
          {selectSection === "board" ? (
            <BoardPage />
          ) : selectSection === "anyalytics" ? (
            <AnyalyticsPage />
          ) : (
            <SettingsPage />
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
