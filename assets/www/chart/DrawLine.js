//包含Drawbase基类绘图

document.write('<script src="./chart/Drawbase.js"></script>');

/************************************************************************************
 * 说明：基本绘图类--------在网格上画线                                                     *
 * 参数： canvasEle ---------------绘图画布ID                                      *
 *       P ---------------------- 图像绘制范围                                      *
 *       P[0] ------------------- 图像左上角顶点的x坐标                              *
 *       P[1] ------------------- 图像左上角顶点的y坐标                              *
 *       P[2] ------------------- 图像绘制范围的宽度                                 *
 *       P[3] ------------------- 图像绘制范围的高度                                *
 ************************************************************************************/

function DrawLine(canvasEle,P)
{
	//继承基类构造函数
	DrawBase.call(this,canvasEle,P);
	//
	
	
	
}

