using System;
using System.Data;
using System.Text;
using System.Data.OleDb;
using Maticsoft.DBUtility;//请先添加引用
namespace light.DAL
{
	/// <summary>
	/// 数据访问类leftmenu。
	/// </summary>
	public class leftmenu
	{
		public leftmenu()
		{}
		#region  成员方法

		/// <summary>
		/// 是否存在该记录
		/// </summary>
		public bool Exists(int pkid)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select count(1) from leftmenu");
			strSql.Append(" where pkid=@pkid ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
			parameters[0].Value = pkid;

			return DbHelperOleDb.Exists(strSql.ToString(),parameters);
		}
        public bool Exists(string cname)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) from category");
            strSql.Append(" where cname=@cname ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@cname", OleDbType.VarChar,255)};
            parameters[0].Value = cname;

            return DbHelperOleDb.Exists(strSql.ToString(), parameters);
        }

		/// <summary>
		/// 增加一条数据
		/// </summary>
		public void Add(light.Model.leftmenu model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("insert into leftmenu(");
			strSql.Append("cname,ename,parentid,isopen,addtime)");
			strSql.Append(" values (");
			strSql.Append("@cname,@ename,@parentid,@isopen,@addtime)");
			OleDbParameter[] parameters = {
					new OleDbParameter("@cname", OleDbType.VarChar,255),
					new OleDbParameter("@ename", OleDbType.VarChar,0),
					new OleDbParameter("@parentid", OleDbType.Integer,4),
					new OleDbParameter("@isopen", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date),
                    new OleDbParameter("@c_description", OleDbType.VarChar,0),
                    new OleDbParameter("@k_description", OleDbType.VarChar,0),
                    new OleDbParameter("@e_description", OleDbType.VarChar,0)};
			parameters[0].Value = model.cnname;
			parameters[1].Value = model.enname;
			parameters[2].Value = model.parentid;
			parameters[3].Value = model.isopen;
			parameters[4].Value = model.addtime;
            parameters[5].Value = model.c_description;
            parameters[6].Value = model.k_description;
            parameters[7].Value = model.e_description;

			DbHelperOleDb.ExecuteSql(strSql.ToString(),parameters);
		}
		/// <summary>
		/// 更新一条数据
		/// </summary>
		public void Update(light.Model.leftmenu model)
		{
			StringBuilder strSql=new StringBuilder();
			strSql.Append("update leftmenu set ");
			strSql.Append("cname=@cname,");
			strSql.Append("ename=@ename,");
			strSql.Append("parentid=@parentid,");
			strSql.Append("isopen=@isopen,");
			strSql.Append("addtime=@addtime,");
            strSql.Append("c_description=@c_description,");
            strSql.Append("k_description=@k_description,");
            strSql.Append("e_description=@e_description");
			strSql.Append(" where pkid=@pkid ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@cname", OleDbType.VarChar,255),
					new OleDbParameter("@ename", OleDbType.VarChar,0),
					new OleDbParameter("@parentid", OleDbType.Integer,4),
					new OleDbParameter("@isopen", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date),
                    new OleDbParameter("@c_description", OleDbType.VarChar,0),
                    new OleDbParameter("@k_description", OleDbType.VarChar,0),
                    new OleDbParameter("@e_description", OleDbType.VarChar,0),
                    new OleDbParameter("@pkid", OleDbType.Integer,4)};
			parameters[0].Value = model.cnname;
			parameters[1].Value = model.enname;
			parameters[2].Value = model.parentid;
			parameters[3].Value = model.isopen;
			parameters[4].Value = model.addtime;
            parameters[5].Value = model.c_description;
            parameters[6].Value = model.k_description;
            parameters[7].Value = model.e_description;
            parameters[8].Value = model.pkid;
			DbHelperOleDb.ExecuteSql(strSql.ToString(),parameters);  
            
		}

		/// <summary>
		/// 删除一条数据
		/// </summary>
		public void Delete(int pkid)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("delete from leftmenu ");
			strSql.Append(" where pkid=@pkid ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
			parameters[0].Value = pkid;

			DbHelperOleDb.ExecuteSql(strSql.ToString(),parameters);
		}


		/// <summary>
		/// 得到一个对象实体
		/// </summary>
		public light.Model.leftmenu GetModel(int pkid)
		{
			
			StringBuilder strSql=new StringBuilder();
			strSql.Append("select * from leftmenu ");
			strSql.Append(" where pkid=@pkid ");
			OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
			parameters[0].Value = pkid;

			light.Model.leftmenu model=new light.Model.leftmenu();
			DataSet ds=DbHelperOleDb.Query(strSql.ToString(),parameters);
			if(ds.Tables[0].Rows.Count>0)
			{
				if(ds.Tables[0].Rows[0]["pkid"].ToString()!="")
				{
					model.pkid=int.Parse(ds.Tables[0].Rows[0]["pkid"].ToString());
				}
				model.cnname=ds.Tables[0].Rows[0]["cname"].ToString();
				model.enname=ds.Tables[0].Rows[0]["ename"].ToString();
				if(ds.Tables[0].Rows[0]["parentid"].ToString()!="")
				{
					model.parentid=int.Parse(ds.Tables[0].Rows[0]["parentid"].ToString());
				}
				if(ds.Tables[0].Rows[0]["isopen"].ToString()!="")
				{
					model.isopen=int.Parse(ds.Tables[0].Rows[0]["isopen"].ToString());
				}
				if(ds.Tables[0].Rows[0]["addtime"].ToString()!="")
				{
					model.addtime=DateTime.Parse(ds.Tables[0].Rows[0]["addtime"].ToString());
				}
                model.c_description = ds.Tables[0].Rows[0]["c_description"].ToString();
                model.k_description = ds.Tables[0].Rows[0]["k_description"].ToString();
                model.e_description = ds.Tables[0].Rows[0]["e_description"].ToString();


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
			strSql.Append("select * ");
			strSql.Append(" FROM leftmenu ");
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
			parameters[0].Value = "leftmenu";
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

