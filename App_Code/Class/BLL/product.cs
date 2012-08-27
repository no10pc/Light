using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// ҵ���߼���product ��ժҪ˵����
	/// </summary>
	public class product
	{
		private readonly light.DAL.product dal=new light.DAL.product();
		public product()
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
		public void Add(light.Model.product model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Update(light.Model.product model)
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

        public void safe(int pkid)
        {
            dal.safe(pkid);
        }
		/// <summary>
		/// �õ�һ������ʵ��
		/// </summary>
		public light.Model.product GetModel(int pkid)
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
		public List<light.Model.product> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// ��������б�
		/// </summary>
		public List<light.Model.product> DataTableToList(DataTable dt)
		{
			List<light.Model.product> modelList = new List<light.Model.product>();
			int rowsCount = dt.Rows.Count;
			if (rowsCount > 0)
			{
				light.Model.product model;
				for (int n = 0; n < rowsCount; n++)
				{
					model = new light.Model.product();
					if(dt.Rows[n]["pkid"].ToString()!="")
					{
						model.pkid=int.Parse(dt.Rows[n]["pkid"].ToString());
					}
					model.pname=dt.Rows[n]["pname"].ToString();
					if(dt.Rows[n]["pcateid"].ToString()!="")
					{
						model.pcateid=int.Parse(dt.Rows[n]["pcateid"].ToString());
					}
					model.plogo=dt.Rows[n]["plogo"].ToString();
					model.pinfo=dt.Rows[n]["pinfo"].ToString();
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

