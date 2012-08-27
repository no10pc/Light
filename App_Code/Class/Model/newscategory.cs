using System;
namespace light.Model
{
	/// <summary>
	/// 实体类newscategory 。(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public class newscategory
	{
		public newscategory()
		{}
		#region Model
		private int _pkid;
		private string _cname;
		private string _ename;
		private int _parentid;
		private int _isopen;
		private DateTime _addtime;
		/// <summary>
		/// 
		/// </summary>
		public int pkid
		{
			set{ _pkid=value;}
			get{return _pkid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string cname
		{
			set{ _cname=value;}
			get{return _cname;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ename
		{
			set{ _ename=value;}
			get{return _ename;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int parentid
		{
			set{ _parentid=value;}
			get{return _parentid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int isopen
		{
			set{ _isopen=value;}
			get{return _isopen;}
		}
		/// <summary>
		/// 
		/// </summary>
		public DateTime addtime
		{
			set{ _addtime=value;}
			get{return _addtime;}
		}
		#endregion Model

	}
}

