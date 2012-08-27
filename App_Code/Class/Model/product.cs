using System;
namespace light.Model
{
    /// <summary>
    /// 实体类product 。(属性说明自动提取数据库字段的描述信息)
    /// </summary>
    [Serializable]
    public class product
    {
        public product()
        { }
        #region Model
        private int _pkid;
        private string _pname;
        private int _pcateid;
        private string _plogo;
        private string _pinfo;
        private int _isopen;
        private DateTime _addtime;
        private string _enpname;
        private string _krpname;
        private string _eninfo;
        private string _krinfo;


        /// <summary>
        /// 
        /// </summary>
        public int pkid
        {
            set { _pkid = value; }
            get { return _pkid; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string pname
        {
            set { _pname = value; }
            get { return _pname; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int pcateid
        {
            set { _pcateid = value; }
            get { return _pcateid; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string plogo
        {
            set { _plogo = value; }
            get { return _plogo; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string pinfo
        {
            set { _pinfo = value; }
            get { return _pinfo; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int isopen
        {
            set { _isopen = value; }
            get { return _isopen; }
        }
        /// <summary>
        /// 
        /// </summary>
        public DateTime addtime
        {
            set { _addtime = value; }
            get { return _addtime; }
        }

        public string enpname
        {
            get { return _enpname; }
            set { _enpname = value; }
        }

        public string krpname
        {
            get { return _krpname; }
            set { _krpname = value; }
        }

        public string eninfo
        {
            get { return _eninfo; }
            set { _eninfo = value; }
        }

        public string krinfo
        {
            get { return _krinfo; }
            set { _krinfo = value; }
        }
        #endregion Model

    }
}

