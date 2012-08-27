using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// ҵ���߼���news ��ժҪ˵����
	/// </summary>
	public class news
	{
		private readonly light.DAL.news dal=new light.DAL.news();
		public news()
		{}
		#region  ��Ա����
		/// <summary>
		/// �Ƿ���ڸü�¼
		/// </summary>
		public bool Exists(int id)
		{
			return dal.Exists(id);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Add(light.Model.news model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// ����һ������
		/// </summary>
		public void Update(light.Model.news model)
		{
			dal.Update(model);
		}

		/// <summary>
		/// ɾ��һ������
		/// </summary>
		public void Delete(int id)
		{
			
			dal.Delete(id);
		}

        /// <summary>
        /// �ָ�һ������
        /// </summary>
        public void safe(int id)
        {

            dal.safe(id);
        }
		/// <summary>
		/// �õ�һ������ʵ��
		/// </summary>
		public light.Model.news GetModel(int id)
		{
			
			return dal.GetModel(id);
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
		public List<light.Model.news> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// ��������б�
		/// </summary>
		public List<light.Model.news> DataTableToList(DataTable dt)
		{
			List<light.Model.news> modelList = new List<light.Model.news>();
			int rowsCount = dt.Rows.Count;
			if (rowsCount > 0)
			{
				light.Model.news model;
				for (int n = 0; n < rowsCount; n++)
				{
					model = new light.Model.news();
					if(dt.Rows[n]["id"].ToString()!="")
					{
						model.id=int.Parse(dt.Rows[n]["id"].ToString());
					}
					model.title=dt.Rows[n]["title"].ToString();
					model.description=dt.Rows[n]["description"].ToString();
					if(dt.Rows[n]["categoryid"].ToString()!="")
					{
						model.categoryid=int.Parse(dt.Rows[n]["categoryid"].ToString());
					}
					if(dt.Rows[n]["isopen"].ToString()!="")
					{
						model.isopen=int.Parse(dt.Rows[n]["isopen"].ToString());
					}
					if(dt.Rows[n]["isrecommend"].ToString()!="")
					{
						model.isrecommend=int.Parse(dt.Rows[n]["isrecommend"].ToString());
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

