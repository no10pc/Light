using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace light.Common
{
    public class UserSessionState
    {
        private int userID;
        private String userName;
        private bool isPassed;
        private string _lng;
     

        public UserSessionState()
        {
            userID = 0;
            userName = "Î´µÇÂ¼";
            isPassed = false;
            lng = "cn";
        }
      
        public String UserName
        {
            get { return userName; }
            set { userName = value; }
        }
        public int UserID
        {
            get { return userID; }
            set { userID = value; }
        }
        public bool IsPassed
        {
            get { return isPassed; }
            set { isPassed = value; }
        }
        public string lng
        {
            get { return _lng;}
            set {_lng = value;}
        }
    }

}