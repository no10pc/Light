using System;
namespace light.Model
{
	/// <summary>
	/// 实体类menu 。(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public class menu
	{
		public menu()
		{}
		#region Model
		private int _id;
		private string _description;
		private int _categoryid;
		private DateTime _addtime;
		/// <summary>
		/// 
		/// </summary>
		public int id
		{
			set{ _id=value;}
			get{return _id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string description
		{
			set{ _description=value;}
			get{return _description;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int categoryid
		{
			set{ _categoryid=value;}
			get{return _categoryid;}
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

