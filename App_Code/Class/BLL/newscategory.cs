using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// ҵ���߼���newscategory ��ժҪ˵����
	/// </summary>
	public class newscategory
	{
		private readonly light.DAL.newscategory dal=new light.DAL.newscategory();
		public newscategory()
		{}
		#region  ��Ա����
		/// <summary>
		/// �Ƿ���ڸü�¼
		/// </summary>
		public bool Exists(int pkid)
		{
			return dal.Exists(pkid);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Add(light.Model.newscategory model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Update(light.Model.newscategory model)
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
		public light.Model.newscategory GetModel(int pkid)
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
		public List<light.Model.newscategory> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// ��������б�
		/// </summary>
		public List<light.Model.newscategory> DataTableToList(DataTable dt)
		{
			List<light.Model.newscategory> modelList = new List<light.Model.newscategory>();
			int rowsCount = dt.Rows.Count;
			if (rowsCount > 0)
			{
				light.Model.newscategory model;
				for (int n = 0; n < rowsCount; n++)
				{
					model = new light.Model.newscategory();
					if(dt.Rows[n]["pkid"].ToString()!="")
					{
						model.pkid=int.Parse(dt.Rows[n]["pkid"].ToString());
					}
					model.cname=dt.Rows[n]["cname"].ToString();
					model.ename=dt.Rows[n]["ename"].ToString();
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

