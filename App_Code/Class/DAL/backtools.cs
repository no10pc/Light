using System;
using System.Data;
using System.Text;
using System.Data.OleDb;
using Maticsoft.DBUtility;//请先添加引用
namespace light.DAL
{
    /// <summary>
    /// 数据访问类backtools。
    /// </summary>
    public class backtools
    {
        public backtools()
        { }
        #region  成员方法
        /// <summary>
        /// 更新一条数据
        /// </summary>
        public void Update(light.Model.backtools model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("update backtools set ");
            strSql.Append("csitename=@csitename,");
            strSql.Append("esitename=@esitename,");
            strSql.Append("ksitename=@ksitename,");
            strSql.Append("caddress=@caddress,");
            strSql.Append("eaddress=@eaddress,");
            strSql.Append("kaddress=@kaddress,");
            strSql.Append("ccopyright=@ccopyright,");
            strSql.Append("ecopyright=@ecopyright,");
            strSql.Append("kcopyright=@kcopyright,");
            strSql.Append("beian=@beian,");
            strSql.Append("phone=@phone,");
            strSql.Append("mobile=@mobile,");
            strSql.Append("fax=@fax,");
            strSql.Append("csiteinfo=@csiteinfo,");
            strSql.Append("esiteinfo=@esiteinfo,");
            strSql.Append("ksiteinfo=@ksiteinfo,");
            strSql.Append("postcode=@postcode,");
            strSql.Append("email=@email,");
            strSql.Append("url=@url");
            strSql.Append(" where username=@username ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@csitename", OleDbType.VarChar,255),
					new OleDbParameter("@esitename", OleDbType.VarChar,255),
					new OleDbParameter("@ksitename", OleDbType.VarChar,255),
					new OleDbParameter("@caddress", OleDbType.VarChar,255),
					new OleDbParameter("@eaddress", OleDbType.VarChar,255),
					new OleDbParameter("@kaddress", OleDbType.VarChar,255),
					new OleDbParameter("@ccopyright", OleDbType.VarChar,255),
					new OleDbParameter("@ecopyright", OleDbType.VarChar,255),
					new OleDbParameter("@kcopyright", OleDbType.VarChar,255),
					new OleDbParameter("@beian", OleDbType.VarChar,255),
					new OleDbParameter("@phone", OleDbType.VarChar,255),
					new OleDbParameter("@mobile", OleDbType.VarChar,255),
					new OleDbParameter("@fax", OleDbType.VarChar,255),
					new OleDbParameter("@csiteinfo", OleDbType.VarChar,0),
					new OleDbParameter("@esiteinfo", OleDbType.VarChar,0),
					new OleDbParameter("@ksiteinfo", OleDbType.VarChar,0),
                    new OleDbParameter("@postcode", OleDbType.VarChar,255),
					new OleDbParameter("@email", OleDbType.VarChar,255),
					new OleDbParameter("@url", OleDbType.VarChar,255),
                    new OleDbParameter("@username", OleDbType.VarChar,255)
                                          };
            parameters[0].Value = model.csitename;
            parameters[1].Value = model.esitename;
            parameters[2].Value = model.ksitename;
            parameters[3].Value = model.caddress;
            parameters[4].Value = model.eaddress;
            parameters[5].Value = model.kaddress;
            parameters[6].Value = model.ccopyright;
            parameters[7].Value = model.ecopyright;
            parameters[8].Value = model.kcopyright;
            parameters[9].Value = model.beian;
            parameters[10].Value = model.phone;
            parameters[11].Value = model.mobile;
            parameters[12].Value = model.fax;
            parameters[13].Value = model.csiteinfo;
            parameters[14].Value = model.esiteinfo;
            parameters[15].Value = model.ksiteinfo;
            parameters[16].Value = model.postcode;
            parameters[17].Value = model.email;
            parameters[18].Value = model.url;
            parameters[19].Value = model.username;
            DbHelperOleDb.ExecuteSql(strSql.ToString(), parameters);
        }

        public void UpdatePsw(light.Model.backtools model)
        {
            DbHelperOleDb.ExecuteSql("update  backtools set [password]='" + model.password + "'");
        }

        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public light.Model.backtools GetModel(string username)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("select username,password,csitename,esitename,ksitename,caddress,eaddress,kaddress,ccopyright,ecopyright,kcopyright,beian,phone,mobile,fax,csiteinfo,esiteinfo,ksiteinfo,postcode,email,url from backtools ");
            strSql.Append(" where username=@username ");
            OleDbParameter[] parameters = {
					new OleDbParameter("@username", OleDbType.VarChar,50)};
            parameters[0].Value = username;

            light.Model.backtools model = new light.Model.backtools();
            DataSet ds = DbHelperOleDb.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                model.username = ds.Tables[0].Rows[0]["username"].ToString();
                model.password = ds.Tables[0].Rows[0]["password"].ToString();
                model.csitename = ds.Tables[0].Rows[0]["csitename"].ToString();
                model.esitename = ds.Tables[0].Rows[0]["esitename"].ToString();
                model.ksitename = ds.Tables[0].Rows[0]["ksitename"].ToString();
                model.caddress = ds.Tables[0].Rows[0]["caddress"].ToString();
                model.eaddress = ds.Tables[0].Rows[0]["eaddress"].ToString();
                model.kaddress = ds.Tables[0].Rows[0]["kaddress"].ToString();
                model.ccopyright = ds.Tables[0].Rows[0]["ccopyright"].ToString();
                model.ecopyright = ds.Tables[0].Rows[0]["ecopyright"].ToString();
                model.kcopyright = ds.Tables[0].Rows[0]["kcopyright"].ToString();
                model.beian = ds.Tables[0].Rows[0]["beian"].ToString();
                model.phone = ds.Tables[0].Rows[0]["phone"].ToString();
                model.mobile = ds.Tables[0].Rows[0]["mobile"].ToString();
                model.fax = ds.Tables[0].Rows[0]["fax"].ToString();
                model.csiteinfo = ds.Tables[0].Rows[0]["csiteinfo"].ToString();
                model.esiteinfo = ds.Tables[0].Rows[0]["esiteinfo"].ToString();
                model.ksiteinfo = ds.Tables[0].Rows[0]["ksiteinfo"].ToString();
                model.postcode = ds.Tables[0].Rows[0]["postcode"].ToString();
                model.email = ds.Tables[0].Rows[0]["email"].ToString();
                model.url = ds.Tables[0].Rows[0]["url"].ToString();
                return model;
            }
            else
            {
                return null;
            }
        }
        #endregion  成员方法


    }
}

