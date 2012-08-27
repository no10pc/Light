using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
	/// <summary>
	/// 业务逻辑类newscategory 的摘要说明。
	/// </summary>
	public class newscategory
	{
		private readonly light.DAL.newscategory dal=new light.DAL.newscategory();
		public newscategory()
		{}
		#region  成员方法
		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int pkid)
		{
			return dal.Exists(pkid);
		}

		/// <summary>
		/// 增加一条数据
		/// </summary>
		public void Add(light.Model.newscategory model)
		{
			dal.Add(model);
		}

		/// <summary>
		/// 更新一条数据
		/// </summary>
		public void Update(light.Model.newscategory model)
		{
			dal.Update(model);
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public void Delete(int pkid)
		{
			
			dal.Delete(pkid);
		}

		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public light.Model.newscategory GetModel(int pkid)
		{
			
			return dal.GetModel(pkid);
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
		public List<light.Model.newscategory> GetModelList(string strWhere)
		{
			DataSet ds = dal.GetList(strWhere);
			return DataTableToList(ds.Tables[0]);
		}
		/// <summary>
		/// 获得数据列表
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

