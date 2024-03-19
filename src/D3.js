import React,{useState} from 'react';
import './D3.css';
import ReactEcharts from 'echarts-for-react';
import rightImg from './assets/images/wave.gif';

function D3(){
    
    const getChartOption=()=>{
        return{
            geo:{
                map:'ditie',
                width:'95%',
                height:'95%',
                roam:'move',//是否开启鼠标缩放和平移漫游，'scale'开启缩放，'move'开启平移
                itemStyle:{
                    borderWidth:0,//描边线宽，0无边线
                },
                label:{
                    shaow:false,//是否显示图形的文本标签
                },
                emphasis:{
                    itemStyle:{
                        color:'blue',//图形的颜色，也可以设置为渐变色和纹理填充
                    },
                    label:{
                        show:false,//是否显示标签
                    }
                }            
            },
            series:[
                {
                    type:'lines',
                    coordinateSystem:'geo',//该系列使用的坐标系
                    polyline:true,
                    effect:{//特效
                        show:true,//是否显示特效
                        symbol:'circle',
                        symbolSize:5,
                        period:3,
                        color:{//线性渐变
                            type:'linear',
                            x:0,
                            y:0,
                            x2:0,
                            y2:1,
                            colorStops:[
                                {
                                    offset:0,
                                    color:'#fff',
                                },
                                {
                                    offset:1,
                                    color:'#88DCFF',
                                }
                            ]
                        },
                        
                    },
                    data:[
                        //上部第1条
                        {
                            lineStyle:{
                                width:10,
                                color:'transparent',
                            },
                            label:{
                                show:true,
                            },
                            coords:[
                                [59,191],
                                [158,128],
                            ]
                        },
                        //第2条
                        {
                            lineStyle:{
                                width:10,
                                color:'transparent',
                            },
                            label:{
                                show:true,
                            },
                            coords:[
                                [238,74],
                                [336,121],
                            ]
                        }

                    ]
                }
            ]
        }        
    };

    return(
        <div>
            {/* 上部 */}
            <div className='top-content'>
                <div className='top-content-1'>
                    <div className='top-img'></div>   
                    <p className='top-title'></p>
                    <div>中间</div>
                </div>
                
            </div>
            {/* 中部 */}
            <div>
                {/* 左边 */}
                <div className='middle-left'>
                    {/* <div className='middle-img-1'></div> */}
                </div>
                {/* 右边 */}
                <div className='middle-right'>
                    {/* <img src={rightImg} className={styles['right-img']} /> */}
                </div>
            </div>
            {/* 下部 */}
            <div>
                {/* <ReactEcharts option={getChartOption()} style={{height:768}}/> */}
            </div>
        </div>
    )
};
export default D3;