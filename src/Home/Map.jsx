import React from 'react';
// import location from 'http://localhost:8080/umi_demo3/public/img/location/location.png';
import {host} from './data.source.js';


class Com extends React.Component{
 
    componentDidMount(){
        const center = new TMap.LatLng(39.8718209, 116.4504354)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        const map = new TMap.Map(document.getElementById('container'), {
            center: center,//设置地图中心点坐标
            zoom: 17,   //设置地图缩放级别
            pitch: 43.5,  //设置俯仰角
            rotation: 45,    //设置地图旋转角度
            scrollable: false,
            baseMap:{type:'vector',features: ['base','label','building2d','point']},
            doubleClickZoom: false,
            draggable: false

        });
        map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
        const markerLayer = new TMap.MultiMarker({
            map: map,  //指定地图容器
            //样式定义
            styles: {
                //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
                "myStyle": new TMap.MarkerStyle({ 
                    "width": 25,  // 点标记样式宽度（像素）
                    "height": 35, // 点标记样式高度（像素）
                    "src": 'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',  //图片路径
                    // "src": host+'/public/img/location/mark.svg',  //图片路径
                    // "src": host+'/public/img/location/mark1.svg',  //图片路径
                    //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                    "anchor": { x: 16, y: 32 }  
                }) 
            },
            //点标记数据数组
            geometries: [{
                "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
                "styleId": 'myStyle',  //指定样式id
                "position": new TMap.LatLng(39.8718209, 116.4504354),  //点标记坐标位置
                "properties": {//自定义属性
                    "title": "marker1"
                }
            }
            ]
            
        });
        // map.showZoomControls(false);
    }
    render(){
        return <div id="container" style={{height:'300px',width:'100%'}}></div>
    }
}
export default Com;