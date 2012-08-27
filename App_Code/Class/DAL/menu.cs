using System;
using System.Data;
using System.Text;
using System.Data.OleDb;
using Maticsoft.DBUtility;//请先添加引用
namespace light.DAL
{
	/// <summary>
	/// 数据访问类menu。
	/// </summary>
	public class menu
	{
		public menu()
		{}
		#region  成员方法

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int id)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from menu");
			strSql.Append(" where id=@id ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@id", OleDbType.Integer,4)};
			parameters[0].Value = id;

			return DbHelperOleDb.Exists(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 增加一条数据
		/// </summary>
		public void Add(light.Model.menu model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into menu(");
			strSql.Append("description,categoryid,addtime)");
			strSql.Append(" values (");
			strSql.Append("@description,@categoryid,@addtime)");
			OleDbParameter[] parameters = {
					new OleDbParameter("@description", OleDbType.VarChar,0),
					new OleDbParameter("@categoryid", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date)};
			parameters[0].Value = model.description;
			parameters[1].Value = model.categoryid;
			parameters[2].Value = model.addtime;

			DbHelperOleDb.ExecuteSql(strSql.ToString(),parameters);
		}
		/// <summary>
		/// 更新一条数据
		/// </summary>
		public void Update(light.Model.menu model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update menu set ");
			strSql.Append("description=@description,");
			strSql.Append("categoryid=@categoryid,");
			strSql.Append("addtime=@addtime");
			strSql.Append(" where id=@id ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@description", OleDbType.VarChar,0),
					new OleDbParameter("@categoryid", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date),
                    new OleDbParameter("@id", OleDbType.Integer,4)
                                          };
			parameters[0].Value = model.description;
			parameters[1].Value = model.categoryid;
			parameters[2].Value = model.addtime;
            parameters[3].Value = model.id;
			DbHelperOleDb.ExecuteSql(strSql.ToString(),parameters);
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public void Delete(int id)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from menu ");
			strSql.Append(" where id=@id ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@id", OleDbType.Integer,4)};
			parameters[0].Value = id;

			DbHelperOleDb.ExecuteSql(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public light.Model.menu GetModel(int id)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select id,description,categoryid,addtime from menu ");
			strSql.Append(" where id=@id ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@id", OleDbType.Integer,4)};
			parameters[0].Value = id;

			light.Model.menu model=new light.Model.menu();
			DataSet ds=DbHelperOleDb.Query(strSql.ToString(),parameters);
			if(ds.Tables[0].Rows.Count>0)
			{
				if(ds.Tables[0].Rows[0]["id"].ToString()!="")
				{
					model.id=int.Parse(ds.Tables[0].Rows[0]["id"].ToString());
				}
				model.description=ds.Tables[0].Rows[0]["description"].ToString();
				if(ds.Tables[0].Rows[0]["categoryid"].ToString()!="")
				{
					model.categoryid=int.Parse(ds.Tables[0].Rows[0]["categoryid"].ToString());
				}
				if(ds.Tables[0].Rows[0]["addtime"].ToString()!="")
				{
					model.addtime=DateTime.Parse(ds.Tables[0].Rows[0]["addtime"].ToString());
				}
				return model;
			}
			else
			{
				return null;
			}
		}

		/// <summary>
		/// 获得数据列表
		/// </summary>
		public DataSet GetList(string strWhere)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select id,description,categoryid,addtime ");
			strSql.Append(" FROM menu ");
			if(strWhere.Trim()!="")
			{
				strSql.Append(" where "+strWhere);
			}
			return DbHelperOleDb.Query(strSql.ToString());
		}

		/*
		/// <summary>
		/// 分页获取数据列表
		/// </summary>
		public DataSet GetList(int PageSize,int PageIndex,string strWhere)
		{
			OleDbParameter[] parameters = {
					new OleDbParameter("@tblName", OleDbType.VarChar, 255),
					new OleDbParameter("@fldName", OleDbType.VarChar, 255),
					new OleDbParameter("@PageSize", OleDbType.Integer),
					new OleDbParameter("@PageIndex", OleDbType.Integer),
					new OleDbParameter("@IsReCount", OleDbType.Bit),
					new OleDbParameter("@OrderType", OleDbType.Bit),
					new OleDbParameter("@strWhere", OleDbType.VarChar,1000),
					};
			parameters[0].Value = "menu";
			parameters[1].Value = "ID";
			parameters[2].Value = PageSize;
			parameters[3].Value = PageIndex;
			parameters[4].Value = 0;
			parameters[5].Value = 0;
			parameters[6].Value = strWhere;	
			return DbHelperOleDb.RunProcedure("UP_GetRecordByPage",parameters,"ds");
		}*/

		#endregion  成员方法
	}
}

