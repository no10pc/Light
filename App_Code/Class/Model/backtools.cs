using System;
namespace light.Model
{
	/// <summary>
	/// 实体类backtools 。(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public class backtools
	{
		public backtools()
		{}
		#region Model
		private string _username;
		private string _password;
		private string _csitename;
		private string _esitename;
		private string _ksitename;
		private string _caddress;
		private string _eaddress;
		private string _kaddress;
		private string _ccopyright;
		private string _ecopyright;
		private string _kcopyright;
		private string _beian;
		private string _phone;
		private string _mobile;
		private string _fax;
		private string _csiteinfo;
		private string _esiteinfo;
		private string _ksiteinfo;
        private string _postcode;
        private string _email;
        private string _url;

       
		/// <summary>
		/// 
		/// </summary>
		public string username
		{
			set{ _username=value;}
			get{return _username;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string password
		{
			set{ _password=value;}
			get{return _password;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string csitename
		{
			set{ _csitename=value;}
			get{return _csitename;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string esitename
		{
			set{ _esitename=value;}
			get{return _esitename;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ksitename
		{
			set{ _ksitename=value;}
			get{return _ksitename;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string caddress
		{
			set{ _caddress=value;}
			get{return _caddress;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string eaddress
		{
			set{ _eaddress=value;}
			get{return _eaddress;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string kaddress
		{
			set{ _kaddress=value;}
			get{return _kaddress;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ccopyright
		{
			set{ _ccopyright=value;}
			get{return _ccopyright;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ecopyright
		{
			set{ _ecopyright=value;}
			get{return _ecopyright;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string kcopyright
		{
			set{ _kcopyright=value;}
			get{return _kcopyright;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string beian
		{
			set{ _beian=value;}
			get{return _beian;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string phone
		{
			set{ _phone=value;}
			get{return _phone;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string mobile
		{
			set{ _mobile=value;}
			get{return _mobile;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string fax
		{
			set{ _fax=value;}
			get{return _fax;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string csiteinfo
		{
			set{ _csiteinfo=value;}
			get{return _csiteinfo;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string esiteinfo
		{
			set{ _esiteinfo=value;}
			get{return _esiteinfo;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ksiteinfo
		{
			set{ _ksiteinfo=value;}
			get{return _ksiteinfo;}
		}
        public string postcode
        {
            get { return _postcode; }
            set { _postcode = value; }
        }
        public string email
        {
            get { return _email; }
            set { _email = value; }
        }
        public string url
        {
            get { return _url; }
            set { _url = value; }
        }
		#endregion Model

	}
}

