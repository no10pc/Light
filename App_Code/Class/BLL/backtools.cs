using System;
using System.Data;
using System.Collections.Generic;
using light.Model;
namespace light.BLL
{
    /// <summary>
    /// ҵ���߼���backtools ��ժҪ˵����
    /// </summary>
    public class backtools
    {
        private readonly light.DAL.backtools dal = new light.DAL.backtools();
        public backtools()
        { }
        #region  ��Ա����

        /// <summary>
        /// ����һ������
        /// </summary>
        public void Update(light.Model.backtools model)
        {
            dal.Update(model);
        }
        /// <summary>
        /// �õ�һ������ʵ��
        /// </summary>
        public light.Model.backtools GetModel(string username)
        {

            return dal.GetModel(username);
        }
        public void UpdatePsw(light.Model.backtools model)
        {
            dal.UpdatePsw(model);
        }
        #endregion  ��Ա����


    }
}

