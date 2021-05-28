import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
//xây dựng hàm xử lý 4 trường hợp output

function tuoiratnhieu(w){
    var m1 = w*3000;
    var a = m1;
    var m2 = 3000;
    var b = 0;
    var h = w;
    var ts = (h/6)*(3*m2*m2 - 3*m1*m1 + b*b - a*a + 3*m2*b + 3*m1*a);
    var ms = (h/2)*(2*m2 - 2*m1 + a + b);
    return ts/ms; 
}

function tuoinhieu(w){
    var h = w;
    var m1 = w*2000;
    var a = m1;
    var m2 = 3000-(w*2000);
    var b = 3000-m2;
    var ts = (h/6)*(3*m2*m2 - 3*m1*m1 + b*b - a*a + 3*m2*b + 3*m1*a);
    var ms = (h/2)*(2*m2 - 2*m1 + a + b);
    return ts/ms; 
}

function tuoivua(w){
    var h = w;
    var m1 = 1000*w;
    var a = m1;
    var m2 = 3000-(1000*w);
    var b = 3000-m2;
    var ts = (h/6)*(3*m2*m2 - 3*m1*m1 + b*b - a*a + 3*m2*b + 3*m1*a);
    var ms = (h/2)*(2*m2 - 2*m1 + a + b);
    return ts/ms; 
}

function tuoiit(w){
    var h = w;
    var m1 = 0;
    var a =0;
    var m2 = 3000 - (3000*w);
    var b = 3000 - m2;
    var ts = (h/6)*(3*m2*m2 - 3*m1*m1 + b*b - a*a + 3*m2*b + 3*m1*a);
    var ms = (h/2)*(2*m2 - 2*m1 + a + b);
    return ts/ms; 
}

// code hàm min
function min(a,b,c){
    if(a<=b&&a<=c){
        return a;
    }
    if(b<=a&&b<=c){
        return b;
    }
    if(c<=a&&c<=b){
        return c;
    }
}
function App() {
  const [values, setValues] = useState({
    thoiTiet: 0,
    doAmDat: 0,
    nuocTrongHo: 0,
  });
  const [kq, setKq] = useState(0);
  const [show, setShow] = useState(false);
  const [thoiTiet, setThoiTiet] = useState("Mưa");
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let tt = 0;
    let da = values.doAmDat;
    let nc = values.nuocTrongHo;
    var out = -1;
    var tt1;
    var da1;
    var nc1;
    if(values.thoiTiet == 1) tt=0.99;
    else tt = values.thoiTiet;
    console.log(tt);

    var luat = -1;

    // mờ hóa thời tiết
    if(tt < 0.33){
        tt1 = "mua";
    }
    else if(tt < 0.66){
        tt1 = "ram";
    }
    else{
        tt1 = "nang";
    }
    // mờ hóa độ ẩm đất
    if(da < 30){
        da1 = "thap";
    }
    else if(da < 60){
        da1 = "vua";
    }
    else {
        da1 = "cao";
    }
    console.log(da1);
    console.log(tt1);
    
    //mờ hóa lượng nước trong hồ
    if(nc < 125){
        nc1 = "can";
    }
    else if(nc < 250){
        nc1 = "it";
    }
    else if(nc < 375){
        nc1 = "lung";
    }
    else{
        nc1 = "day";
    }
    console.log(nc1);
 ///////////////////////////////////////////////////////////////////////////////////////////////////
    // lựa chọn luật theo tập luật có sẵn
 
    if(tt1 == "mua"){
        luat = 0;
    }
    else if (tt1 = "ram"){
        // xu ly ram
        if(da1 == "thap"){
            //xuly nuoc trong ho
            if(nc1 == "can"){
                luat = 20;
            }
            else if(nc1 == "it"){
                luat = 17;
            }
            else if ( nc1 == "lung"){
                luat = 12;
            }
            else{
                luat = 6;
            }
        }
        else if(da1 == "vua"){
            //xuly nuoc trong ho
            if(nc1 == "can"){
                luat = 0;
            }
            else if(nc1 == "it"){
                luat = 15;
            }
            else if ( nc1 == "lung"){
                luat = 10;
            }
            else{
                luat = 4;
            }
        }
        else{
            //xuly nuoc trong ho
            if(nc1 == "can"){
                luat = 0;
            }
            else if(nc1 == "it"){
                luat = 0;
            }
            else if ( nc1 == "lung"){
                luat = 8;
            }
            else{
                luat = 2;
            }
        }
    }
    else{
        //xu ly nang
        if(da1 == "thap"){
            //xuly nuoc trong ho
            if(nc1 == "can"){
                luat = 19;
            }
            else if(nc1 == "it"){
                luat = 16;
            }
            else if ( nc1 == "lung"){
                luat = 11;
            }
            else{
                luat = 5;
            }
        }
        else if(da1 == "vua"){
            //xuly nuoc trong ho
            if(nc1 == "can"){
                luat = 18;
            }
            else if(nc1 == "it"){
                luat = 14;
            }
            else if ( nc1 == "lung"){
                luat = 9;
            }
            else{
                luat = 3;
            }
        }
        else{
            //xuly nuoc trong ho
            if(nc1 == "can"){
                luat = 0;
            }
            else if(nc1 == "it"){
                luat = 13;
            }
            else if ( nc1 == "lung"){
                luat = 7;
            }
            else{
                luat = 1;
            }
        }
    }
    // chọn luật xong

    // xu ly tinh toan------------------------------------------------------------------------------------------------------------
    var m_day = nc/500;
    var m_lung;
    if(nc<200){
        m_lung = nc/200;
    }
    else{
        m_lung = (500-nc)/200;
    }

    var m_can = (500-nc)/500;

    var am_cao = da/90;
    var am_vua;
    if(da<45){
        am_vua = da/45;
    }
    else{
        am_vua = (90-da)/45;
    }
    var am_thap =(90-da)/90;
    var m_nang = tt;
    var m_ram;
    if(tt<0.5){
        m_ram = 2*tt;
    }
    else{
        m_ram = (-2*tt)+2;
    }
    
    
    var w;
    if ( luat == 0){
        out = 0;
        
    }
    else if(luat == 1){
        w = min(m_day,am_cao,m_nang);
        out = tuoinhieu(w);
    }
    else if(luat == 2){
        w = min(m_day,am_cao,m_ram);
        out = tuoivua(w);
    }
    else if(luat == 3){
        w = min(m_day,am_vua,m_ram);
        out = tuoinhieu(w);
    }
    else if(luat == 4){
        w = min(m_day,am_vua,m_ram);
        out = tuoinhieu(w);
    }
    else if(luat == 5){
        w = min(m_day,am_thap,m_nang);
        out = tuoiratnhieu(w);
    }
    else if(luat == 6){
        w = min(m_day,am_thap,m_ram);
        out = tuoiratnhieu(w);
    }
    else if(luat == 7){
        w = min(m_lung,am_cao,m_nang);
        out = tuoinhieu(w);
    }
    else if(luat == 8){
        w = min(m_lung,am_cao,m_ram);
        out = tuoiit(w);
    }
    else if(luat == 9){
        w = min(m_lung,am_vua,m_nang);
        out = tuoinhieu(w);
    }
    else if(luat == 10){
        w = min(m_lung,am_vua,m_nang);
        out = tuoivua(w);
    }
    else if(luat == 11){
        w = min(m_lung,am_thap,m_nang);
        out = tuoiratnhieu(w);
    }
    else if(luat == 12){
        w = min(m_lung,am_thap,m_ram);
        out = tuoinhieu(w);
    }
    else if(luat == 13){
        w = min(m_can,am_cao,m_ram);
        out = tuoiit(w);
    }
    else if(luat == 14){
        w = min(m_can,am_cao,m_ram);
        out = tuoivua(w);
    }
    else if(luat == 15){
        w = min(m_can,am_vua,m_ram);
        out = tuoiit(w);
    }
    else if(luat == 16){
        w = min(m_can,am_thap,m_nang);
        out = tuoivua(w);
    }
    else if(luat == 17){
        w = min(m_can,am_thap,m_nang);
        out = tuoiit(w);
    }
    else if(luat == 18){
        w = min(m_can,am_thap,m_nang);
        out = tuoiit(w);
    }
    else if(luat == 19){
        w = min(m_can,am_thap,m_nang);
        out = tuoiit(w);
    }
    else if(luat == 20) {
        w = min(m_can,am_thap,m_ram);
        out = tuoiit(w);
    }
    setKq(out);
    console.log(kq);
  };
  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    if (values.thoiTiet < 0.33) {
      setThoiTiet("Mưa");
    } else if (values.thoiTiet < 0.66) {
      setThoiTiet("Râm");
    } else if (values.thoiTiet >= 0.66) setThoiTiet("Nắng");
  };
  const clearValues = () =>{
    setShow(false);
    setValues({
      thoiTiet: 0,
    doAmDat: 0,
    nuocTrongHo: 0,
    })
  }
  return (
    <div className="main"> 
     <div className="title">NHÓM 22 - HỆ CHUYÊN GIA HỖ TRỢ ĐIỀU KHIỂN TƯỚI NƯỚC CÂY TRỒNG</div>
     <div className="form">
     <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="left">Thời tiết: </div>
          <div>
            <div>
              <input
                name="thoiTiet"
                type="number"
                min="0"
                max="1"
                step="0.01"
                onChange={handleChanges}
                value={values.thoiTiet}
              />      ({thoiTiet})
            </div> 
            <div>
              <input
                name="thoiTiet"
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={handleChanges}
                value={values.thoiTiet}
              />{" "}
        
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="left">Độ ẩm đất (%): </div>
          <div>
            <div>
              <input
                name="doAmDat"
                type="number"
                min="0"
                max="95"
                step="1"
                onChange={handleChanges}
                value={values.doAmDat}
              />{" "}
              %
            </div>
            <div>
              <input
                name="doAmDat"
                type="range"
                min="0"
                max="95"
                step="1"
                onChange={handleChanges}
                value={values.doAmDat}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="left">Nước Trong hồ (mét khối): </div>
          <div>
            <div>
              <input
                name="nuocTrongHo"
                type="number"
                min="0"
                max="500"
                step="1"
                onChange={handleChanges}
                value={values.nuocTrongHo}
              />{" "}
              (mét khối)
            </div>
            <div>
              <input
                name="nuocTrongHo"
                type="range"
                min="0"
                max="500"
                step="1"
                onChange={handleChanges}
                value={values.nuocTrongHo}
              />
            </div>
          </div>
        </div>
        <div className="flex" id="kq">
            <div className="left">Lượng nước cần tưới: </div>
            <div>{kq} lít</div>
          </div>
        <div className="btn">
        <button type="submit">Xem kết quả</button>
        <button onClick={clearValues}>Đặt lại dữ liệu về mặc định</button>
        </div>
      </form>
     </div>
    </div>
  );
}

export default App;
