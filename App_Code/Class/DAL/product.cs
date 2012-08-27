using System;
using System.Data;
using System.Text;
using System.Data.OleDb;
using Maticsoft.DBUtility;//请先添加引用
namespace light.DAL
{
    /// <summary>
    /// 数据访问类product。
    /// </summary>
    public class product
    {
        public product()
        { }
        #region  成员方法

        /// <summary>
        /// 是否存在该记录
        /// </summary>
        public bool Exists(int pkid)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) from product");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            return DbHelperOleDb.Exists(strSql.ToString(), parameters);
        }


        /// <summary>
        /// 增加一条数据
        /// </summary>
        public void Add(light.Model.product model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("insert into product(");
            strSql.Append("pname,pcateid,plogo,pinfo,isopen,addtime,enpname,krpname,eninfo,krinfo )");
            strSql.Append(" values (");
            strSql.Append("@pname,@pcateid,@plogo,@pinfo,@isopen,@addtime,@enpname,@krpname,@eninfo,@krinfo)");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pname", OleDbType.VarChar,255),
					new OleDbParameter("@pcateid", OleDbType.Integer,4),
					new OleDbParameter("@plogo", OleDbType.VarChar,255),
					new OleDbParameter("@pinfo", OleDbType.VarChar,0),
					new OleDbParameter("@isopen", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date),
                    new OleDbParameter("@enpname", OleDbType.VarChar,255),
                    new OleDbParameter("@krpname", OleDbType.VarChar,255),
                    new OleDbParameter("@eninfo", OleDbType.VarChar,0),
					new OleDbParameter("@krinfo", OleDbType.VarChar,0)
                                          };
            parameters[0].Value = model.pname;
            parameters[1].Value = model.pcateid;
            parameters[2].Value = model.plogo;
            parameters[3].Value = model.pinfo;
            parameters[4].Value = model.isopen;
            parameters[5].Value = model.addtime;
            parameters[6].Value = model.enpname;
            parameters[7].Value = model.krpname;
            parameters[8].Value = model.eninfo;
            parameters[9].Value = model.krinfo;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }
        /// <summary>
        /// 更新一条数据
        /// </summary>
        public void Update(light.Model.product model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("update product set ");
            strSql.Append("pname=@pname,");
            strSql.Append("pcateid=@pcateid,");
            strSql.Append("plogo=@plogo,");
            strSql.Append("pinfo=@pinfo,");
            strSql.Append("isopen=@isopen,");
            strSql.Append("addtime=@addtime,");
            strSql.Append("enpname=@enpname,");
            strSql.Append("krpname=@krpname,");
            strSql.Append("eninfo=@eninfo,");
            strSql.Append("krinfo=@krinfo");


            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pname", OleDbType.VarChar,255),
					new OleDbParameter("@pcateid", OleDbType.Integer,4),
					new OleDbParameter("@plogo", OleDbType.VarChar,255),
					new OleDbParameter("@pinfo", OleDbType.VarChar,0),
					new OleDbParameter("@isopen", OleDbType.Integer,4),
					new OleDbParameter("@addtime", OleDbType.Date),
                    new OleDbParameter("@enpname", OleDbType.VarChar,255),
                    new OleDbParameter("@krpname", OleDbType.VarChar,255),
                    new OleDbParameter("@eninfo", OleDbType.VarChar,0),
					new OleDbParameter("@krinfo", OleDbType.VarChar,0),
                    new OleDbParameter("@pkid", OleDbType.Integer,4)

                                          };
            parameters[0].Value = model.pname;
            parameters[1].Value = model.pcateid;
            parameters[2].Value = model.plogo;
            parameters[3].Value = model.pinfo;
            parameters[4].Value = model.isopen;
            parameters[5].Value = model.addtime;
            parameters[6].Value = model.enpname;
            parameters[7].Value = model.krpname;
            parameters[8].Value = model.eninfo;
            parameters[9].Value = model.krinfo;
            parameters[10].Value = model.pkid;
            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }

        /// <summary>
        /// 删除一条数据
        /// </summary>
        public void Delete(int pkid)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("update product set isopen=0 ");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }

        public void safe(int pkid)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("update product set isopen=1 ");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }

        public void unDelete(int pkid)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("update product set isopen=1 ");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }


        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public light.Model.product GetModel(int pkid)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("select * from product ");
            strSql.Append(" where pkid=@pkid ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@pkid", OleDbType.Integer,4)};
            parameters[0].Value = pkid;

            light.Model.product model = new light.Model.product();
            DataSet ds = DbHelperOleDb.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                if (ds.Tables[0].Rows[0]["pkid"].ToString() != "")
                {
                    model.pkid = int.Parse(ds.Tables[0].Rows[0]["pkid"].ToString());
                }
                model.pname = ds.Tables[0].Rows[0]["pname"].ToString();
                if (ds.Tables[0].Rows[0]["pcateid"].ToString() != "")
                {
                    model.pcateid = int.Parse(ds.Tables[0].Rows[0]["pcateid"].ToString());
                }
                model.plogo = ds.Tables[0].Rows[0]["plogo"].ToString();
                model.pinfo = ds.Tables[0].Rows[0]["pinfo"].ToString();
                if (ds.Tables[0].Rows[0]["isopen"].ToString() != "")
                {
                    model.isopen = int.Parse(ds.Tables[0].Rows[0]["isopen"].ToString());
                }
                if (ds.Tables[0].Rows[0]["addtime"].ToString() != "")
                {
                    model.addtime = DateTime.Parse(ds.Tables[0].Rows[0]["addtime"].ToString());
                }

                model.enpname = ds.Tables[0].Rows[0]["enpname"].ToString();
                model.krpname = ds.Tables[0].Rows[0]["krpname"].ToString();
                model.eninfo = ds.Tables[0].Rows[0]["eninfo"].ToString();
                model.krinfo = ds.Tables[0].Rows[0]["krinfo"].ToString();


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
            strSql.Append("select * ");
            strSql.Append(" FROM product ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere+" order by pkid desc ");
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
            parameters[0].Value = "product";
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

