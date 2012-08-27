using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public partial class ValidateCode : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        string checkCode = GetRandomCode(5);
        light.Common.Utility.WriteCookie("checkcode", checkCode);
        //Session["checkcode"] = checkCode;
        SetPageNoCache();
        CreateImage(checkCode);
    }
    /// <summary>
    /// 设置页面不被缓存
    /// </summary>
    private void SetPageNoCache()
    {
        Response.Buffer = true;
        Response.ExpiresAbsolute = System.DateTime.Now.AddSeconds(-1);
        Response.Expires = 0;
        Response.CacheControl = "no-cache";
        Response.AppendHeader("Pragma", "No-Cache");
    }

    public static String RndNum(int VcodeNum)
    {
        String Vchar = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,Z";
        String[] VcArray = Vchar.Split(',');
        String VNum = "";
        Random random = new Random();
        for (int i = 1; i <= VcodeNum; i++)
        {
            int iNum = 0;
            while ((iNum = Convert.ToInt32(VcArray.Length * random.NextDouble())) == VcArray.Length)
            {
                iNum = Convert.ToInt32(VcArray.Length * random.NextDouble());
            }
            VNum += VcArray[iNum];
        }
        return VNum;
    }

    private string GetRandomCode(int codeCount)
    {
        string allChar = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,h,i,j,k,m,n,p,r,s,t,u,w,x,y,z";
        string[] allCharArray = allChar.Split(',');
        string RandomCode = "";
        int temp = -1;

        Random rand = new Random();
        for (int i = 0; i < codeCount; i++)
        {
            if (temp != -1)
            {
                rand = new Random(temp * i * ((int)DateTime.Now.Ticks));
            }

            int t = rand.Next(25);

            while (temp == t)
            {
                t = rand.Next(25);
            }

            temp = t;
            RandomCode += allCharArray[t];
        }

        return RandomCode;
    }
    private void CreateImage(string checkCode)
    {
        /**/
        ///创建Bmp位图
        Bitmap bitMapImage = new System.Drawing.Bitmap(110, 25);
        Graphics graphicImage = Graphics.FromImage(bitMapImage);
        /**/
        ///设置画笔的输出模式
        graphicImage.SmoothingMode = SmoothingMode.HighSpeed;
        graphicImage.Clear(Color.White);
        //生成随机生成器
        Random random = new Random();

        //清空图片背景色
        //graphicImage.Clear(Color.White);

        // 画图片的背景噪音线
        int j;
        for (j = 0; j < 15; j++)
        {
            int x = random.Next(bitMapImage.Width);
            int y = random.Next(bitMapImage.Height);
            Rectangle rect = new Rectangle(x, y, random.Next(1, 15), random.Next(1, 15));
            graphicImage.DrawEllipse(new Pen(Color.Silver), rect);
        }

        /**/
        ///添加文本字符串
        Font f = new System.Drawing.Font("Arial ", 14, FontStyle.Italic);
        Brush b = new System.Drawing.SolidBrush(Color.Black);
        Brush r = new System.Drawing.SolidBrush(Color.Red);

        char[] ch = checkCode.ToCharArray();
        for (int i = 0; i < ch.Length; i++)
        {
            if (ch[i] >= '0' && ch[i] <= '9')
            {
                //数字用红色显示
                graphicImage.DrawString(ch[i].ToString(), f, r, 3 + (i * 20), new Random().Next(2));
            }
            else
            {   //字母用黑色显示
                graphicImage.DrawString(ch[i].ToString(), f, b, 3 + (i * 20), new Random().Next(2));
            }
        }

        //graphicImage.DrawString(gif, new Font("Arial", 20, FontStyle.Italic), SystemBrushes.Highlight, new Point(10, 5));
        /**/
        ///设置图像输出的格式
        Response.ContentType = "image/jpeg";
        /**/
        ///保存数据流
        bitMapImage.Save(Response.OutputStream, ImageFormat.Jpeg);
        /**/
        ///释放占用的资源
        /////history back 不重复 
        //Response.Cache.SetNoStore();//这一句 		
        //Response.ClearContent();
        graphicImage.Dispose();
        bitMapImage.Dispose();
    }

}
