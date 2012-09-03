using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// ҵ���߼���leftmenu ��ժҪ˵����
	/// </summary>
	public class leftmenu
	{
		private readonly light.DAL.leftmenu dal=new light.DAL.leftmenu();
		public leftmenu()
		{}
		#region  ��Ա����
		/// <summary>
		/// �Ƿ���ڸü�¼
		/// </summary>
		public bool Exists(int pkid)
		{
			return dal.Exists(pkid);
		}
        public bool Exists(string cname)
        {
            return dal.Exists(cname);
        }
		/// <summary>
		/// ����һ������
		/// </summary>
		public void Add(light.Model.leftmenu model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Update(light.Model.leftmenu model)
		{
			dal.Update(model);
		}

		/// <summary>
		/// ɾ��һ������
		/// </summary>
		public void Delete(int pkid)
		{
			
			dal.Delete(pkid);
		}

		/// <summary>
		/// �õ�һ������ʵ��
		/// </summary>
		public light.Model.leftmenu GetModel(int pkid)
		{
			
			return dal.GetModel(pkid);
		}

		/// <summary>
		/// ��������б�
		/// </summary>
		public DataSet GetList(string strWhere)
		{
			return dal.GetList(strWhere);
		}
		/// <summary>
		/// ��������б�
		/// </summary>
		public List<light.Model.leftmenu> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// ��������б�
		/// </summary>
		public List<light.Model.leftmenu> DataTableToList(DataTable dt)
		{
			List<light.Model.leftmenu> modelList = new List<light.Model.leftmenu>();
			int rowsCount = dt.Rows.Count;
			if (rowsCount > 0)
			{
				light.Model.leftmenu model;
				for (int n = 0; n < rowsCount; n++)
				{
					model = new light.Model.leftmenu();
					if(dt.Rows[n]["pkid"].ToString()!="")
					{
						model.pkid=int.Parse(dt.Rows[n]["pkid"].ToString());
					}
					model.cnname=dt.Rows[n]["cname"].ToString();
					model.enname=dt.Rows[n]["ename"].ToString();
					if(dt.Rows[n]["parentid"].ToString()!="")
					{
						model.parentid=int.Parse(dt.Rows[n]["parentid"].ToString());
					}
					if(dt.Rows[n]["isopen"].ToString()!="")
					{
						model.isopen=int.Parse(dt.Rows[n]["isopen"].ToString());
					}
					if(dt.Rows[n]["addtime"].ToString()!="")
					{
						model.addtime=DateTime.Parse(dt.Rows[n]["addtime"].ToString());
					}
                    model.c_description = dt.Rows[n]["c_description"].ToString();
                    model.k_description = dt.Rows[n]["k_description"].ToString();
                    model.e_description = dt.Rows[n]["e_description"].ToString();

					modelList.Add(model);
				}
			}
			return modelList;
		}

		/// <summary>
		/// ��������б�
		/// </summary>
		public DataSet GetAllList()
		{
			return GetList("");
		}

		/// <summary>
		/// ��������б�
		/// </summary>
		//public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		//{
			//return dal.GetList(PageSize,PageIndex,strWhere);
		//}

		#endregion  ��Ա����
	}
}

