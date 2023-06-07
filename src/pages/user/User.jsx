import React, { useState, useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActivities } from '../../stores/user';
import { removeUserInfo } from '../../stores/auth';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_ACTIVITIES_TYPE } from '../../utils/Constants';

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo, activities = null} = useSelector((state) => ({
    userInfo: state.auth.userInfo,
    activities: state.user.activities,
  }));

  useEffect(() => {
    (async function () {
      await dispatch(getActivities({
        id: userInfo.id,
      }));
    })();
  }, []);

  const handleLogout = () => {
    dispatch(removeUserInfo());
    navigate('/');
  };

  if (!activities) {
    return null;
  }

  if (activities.length < 1) {
    return (
      <div style={{textAlign: 'center'}}>No Data</div>
    );
  }

  return (
    <div className="page-user">
      <div className="list-activities">
        {activities.map((item, index) => {
          return (
            <div key={index} className="list-container">
              <div className="list-item">
                <div className="list-helper-text">Type</div>
                <div>{ACCOUNT_ACTIVITIES_TYPE[item.actionType]}</div>
              </div>
              <div className="list-item">
                <div className="list-helper-text">Location</div>
                <div>{item.location}</div>
              </div>
              <div className="list-item">
                <div className="list-helper-text">IP</div>
                <div>{item.ip}</div>
              </div>
              <div className="list-item">
                <div className="list-helper-text">Time</div>
                <div>
                  {
                    moment(item.createdTime)
                      .utcOffset(8)
                      .format('YYYY-MM-DD HH:mm:ss')
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default User;
