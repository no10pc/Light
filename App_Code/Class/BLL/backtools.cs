using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
    /// <summary>
    /// 业务逻辑类backtools 的摘要说明。
    /// </summary>
    public class backtools
    {
        private readonly light.DAL.backtools dal = new light.DAL.backtools();
        public backtools()
        { }
        #region  成员方法

        /// <summary>
        /// 更新一条数据
        /// </summary>
        public void Update(light.Model.backtools model)
        {
            dal.Update(model);
        }
        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public light.Model.backtools GetModel(string username)
        {

            return dal.GetModel(username);
        }
        public void UpdatePsw(light.Model.backtools model)
        {
            dal.UpdatePsw(model);
        }
        #endregion  成员方法


    }
}

