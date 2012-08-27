using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// ҵ���߼���category ��ժҪ˵����
	/// </summary>
	public class category
	{
		private readonly light.DAL.category dal=new light.DAL.category();
		public category()
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
		public void Add(light.Model.category model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Update(light.Model.category model)
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
		public light.Model.category GetModel(int pkid)
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
		public List<light.Model.category> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// ��������б�
		/// </summary>
		public List<light.Model.category> DataTableToList(DataTable dt)
		{
			List<light.Model.category> modelList = new List<light.Model.category>();
			int rowsCount = dt.Rows.Count;
			if (rowsCount > 0)
			{
				light.Model.category model;
				for (int n = 0; n < rowsCount; n++)
				{
					model = new light.Model.category();
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

