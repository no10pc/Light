using System;
using System.Data;
using System.Text;
using System.Data.OleDb;
using Maticsoft.DBUtility;//请先添加引用
namespace light.DAL
{
    /// <summary>
    /// 数据访问类category。
    /// </summary>
    public class category
    {
        public category()
        { }
        #region  成员方法

        /// <summary>
        /// 是否存在该记录
        /// </summary>
        public bool Exists(int pkid)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) from category");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            return DbHelperOleDb.Exists(strSql.ToString(), parameters);
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
        public void Add(light.Model.category model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("insert into category(");
            strSql.Append("cname,ename,parentid,isopen,addtime)");
            strSql.Append(" values (");
            strSql.Append("@cname,@ename,@parentid,@isopen,@addtime)");
            OleDbParameter[] parameters = {
					new OleDbParameter("@cname", OleDbType.VarChar,255),
					new OleDbParameter("@ename", OleDbType.VarChar,255),
					new OleDbParameter("@parentid", OleDbType.Integer,4),
					new OleDbParameter("@isopen", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date)};
            parameters[0].Value = model.cname;
            parameters[1].Value = model.ename;
            parameters[2].Value = model.parentid;
            parameters[3].Value = model.isopen;
            parameters[4].Value = model.addtime;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }
        /// <summary>
        /// 更新一条数据
        /// </summary>
        public void Update(light.Model.category model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("update category set ");
            strSql.Append("[cname]=@cname,");
            strSql.Append("[ename]=@ename,");
            strSql.Append("[parentid]=@parentid,");
            strSql.Append("[isopen]=@isopen,");
            strSql.Append("[addtime]=@addtime");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@cname", OleDbType.VarChar,255),
					new OleDbParameter("@ename", OleDbType.VarChar,255),
					new OleDbParameter("@parentid", OleDbType.Integer,4),
					new OleDbParameter("@isopen", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date),
                    new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = model.cname;
            parameters[1].Value = model.ename;
            parameters[2].Value = model.parentid;
            parameters[3].Value = model.isopen;
            parameters[4].Value = model.addtime;
            parameters[5].Value = model.pkid;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }

        /// <summary>
        /// 删除一条数据
        /// </summary>
        public void Delete(int pkid)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from category ");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }


        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public light.Model.category GetModel(int pkid)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("select pkid,cname,ename,parentid,isopen,addtime from category ");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            light.Model.category model = new light.Model.category();
            DataSet ds = DbHelperOleDb.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                model.pkid = int.Parse(ds.Tables[0].Rows[0]["pkid"].ToString());
                model.cname = ds.Tables[0].Rows[0]["cname"].ToString();
                model.ename = ds.Tables[0].Rows[0]["ename"].ToString();
                model.parentid = int.Parse(ds.Tables[0].Rows[0]["parentid"].ToString());
                model.isopen = int.Parse(ds.Tables[0].Rows[0]["isopen"].ToString());
                model.addtime = DateTime.Parse(ds.Tables[0].Rows[0]["addtime"].ToString());
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
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select pkid,cname,ename,parentid,isopen,addtime ");
            strSql.Append(" FROM category ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
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
            parameters[0].Value = "category";
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

