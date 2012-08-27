using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// 业务逻辑类news 的摘要说明。
	/// </summary>
	public class news
	{
		private readonly light.DAL.news dal=new light.DAL.news();
		public news()
		{}
		#region  成员方法
		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int id)
		{
			return dal.Exists(id);
		}

		/// <summary>
		/// 增加一条数据
		/// </summary>
		public void Add(light.Model.news model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// 更新一条数据
		/// </summary>
		public void Update(light.Model.news model)
		{
			dal.Update(model);
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public void Delete(int id)
		{
			
			dal.Delete(id);
		}

        /// <summary>
        /// 恢复一条数据
        /// </summary>
        public void safe(int id)
        {

            dal.safe(id);
        }
		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public light.Model.news GetModel(int id)
		{
			
			return dal.GetModel(id);
		}


		/// <summary>
		/// 获得数据列表
		/// </summary>
		public DataSet GetList(string strWhere)
		{
			return dal.GetList(strWhere);
		}
		/// <summary>
		/// 获得数据列表
		/// </summary>
		public List<light.Model.news> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// 获得数据列表
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
		/// 获得数据列表
		/// </summary>
		public DataSet GetAllList()
		{
			return GetList("");
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
		//public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		//{
			//return dal.GetList(PageSize,PageIndex,strWhere);
		//}

		#endregion  成员方法
	}
}

