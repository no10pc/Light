using System;
namespace light.Model
{
	/// <summary>
	/// ʵ����leftmenu ��(����˵���Զ���ȡ���ݿ��ֶε�������Ϣ)
	/// </summary>
	[Serializable]
	public class leftmenu
	{
		public leftmenu()
		{}
        public int pkid { get; set; }
        public string cnname { get; set; }
        public string enname { get; set; }
        public string krname { get; set; }
        public int parentid { get; set; }
        public int isopen { get; set; }
        public DateTime addtime { get; set; }
        public string c_description { get; set; }
        public string k_description { get; set; }
        public string e_description { get; set; }
	}
}
