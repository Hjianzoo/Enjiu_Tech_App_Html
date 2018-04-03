$(function () {
    // var simulateDataBase = '{"GVRMS":["1","2","3"],"GVTHDU":["3","1","2"],"GVHZ":"23","GVPS":"12","GCRMS":["1","1","2"],"GCPF":["1","6","2"],"GCTHDI":["2","6","7"]}'
    // var simulateDataWarning = { "WorkStatus": "0","HF1": "188", "HF2": "256" };
    // var simulateDataSetting = '{"Switch":"2", "CTLoction":"2", "SystemCapacity": "233", "ECOEnabled":"2"}'
    // var simulateDataAbout = '{"ControlDSP":"V121B011", "AuxiliaryDSP":"V113B012", "FPGA":"V023B112", "WiFiVersion":"V1.0.1", "WiFiUpdateFile":"V2.0.1"}'
    // var simulateDataUser = '{"WiFiName":"mxchipFAE", "WiFiPassword":"mxchip123456", "User":"admin", "Password":"123456"}'
    $.get('/api/base', {}, function (res) {
        renderBase(res);
    })

    //10s自动刷新
    setInterval(function () {
        $.get('/api/base', {}, function (res) {
            renderBase(res);
        })
        $.get('/api/setting', {}, function (res) {
            renderSetting(res);
        })
        $.get('/api/warning', {}, function (res) {
            renderWarning(res);
        })
        $.get('/api/about', {}, function (res) {
            renderAbout(res);
        })
    }, 10000)

    // 标签切换
    $(".section ul li").each(function (index) {
        $(this).on('click', function () {
            $(".section ul li").removeClass('active');
            $(this).addClass('active');
            $(".part").addClass('hide').removeClass('show');
            $(".part").eq(index).removeClass('hide').addClass("show");
            if (index == '0') {
                $.get('/api/base', {}, function (res) {
                    renderBase(res);
                })
            } else if (index == '1') {
                $.get('/api/setting', {}, function (res) {
                    renderSetting(res);
                })
            } else if (index == '2') {
                $.get('/api/warning', {}, function (res) {
                    renderWarning(res);
                })
            } else if (index == '3') {
                $.get('/api/about', {}, function (res) {
                    renderAbout(res);
                })
            }
        })
    })
    // 告警页面渲染
    for (var i = 0; i < 16; i++) {
        $('.group').append('<p class="num" index-data=' + i + '>' + i + '</p>')
    }
    // wifi设置弹框弹出
    $(".icon-shezhi").on('click', function () {
        $(".mask").removeClass('hide').addClass("show");
        $(".wifi-view").removeClass('hide').addClass("show");
        $.get('/api/wifi_config', {}, function (res) {
            setUser(res);
        })
    })

    // 设置参数
    $("select").change(function () {
        var data = {};
        $(".mask").removeClass('hide').addClass("show");
        $(".parameter-ok").removeClass('hide').addClass("show");
        data[$(this).attr('class')] = $(this).val();
        var dataStr = JSON.stringify(data); // 发送的JSON数据字符串
        $.post('/api/setting', { data: dataStr }, function (res) {
            renderSetting(res);
        })
    })

    $(".settingInput").change(function () {
        var data = {};
        $(".mask").removeClass('hide').addClass("show");
        $(".parameter-ok").removeClass('hide').addClass("show");
        var key = $(this).attr('class');
        data[key] = $(this).val();
        var dataStr = JSON.stringify(data); // 发送的JSON数据字符串
        if (key != 'WiFiName' && key != 'WiFiPassword' && key != 'User' && key != 'Password') {
            $.post('/api/setting', { data: dataStr }, function (res) {
                renderSetting(res);
            })
        }
    })

    // 点击固话参数
    $(".submit").on('click', function () {
        /*var data = {}; // 发送的JSON数据对象
        var dataArr = [];
        var classArr = [];
        var valArr = [];
        var data1 = ""; // 分段数据，防止数据长度过长服务器无法接受处理
        var data2 = ""; // 分段数据，防止数据长度过长服务器无法接受处理
        var data3 = ""; // 分段数据，防止数据长度过长服务器无法接受处理
        // 遍历当前页面类名
        $("select").each(function (index, item) {
            classArr.push($(item).attr('class'))
        })
        $("input").each(function (index, item) {
            classArr.push($(item).attr('class'))
        })
        classArr.splice(37, 4); // 去除wifi弹窗的4个输入值
        // 遍历当前页面值
        $("select").each(function (index, item) {
            valArr.push($(item).val())
        })
        $("input").each(function (index, item) {
            valArr.push($(item).val())
        })
        valArr.splice(37, 4); // 去除wifi弹窗的4个输入值
        // 为data添加属性
        for (var i = 0; i < classArr.length; i++) {
            var dataAttr = classArr[i];
            var dataValue = valArr[i]
            data[dataAttr] = dataValue;
        }

        var dataStr = JSON.stringify(data); // 发送的JSON数据字符串

        // 分段数据，防止数据长度过长服务器无法接受处理
        dataArr = dataStr.split(",");

        data1 = dataArr.slice(0, 14).join() + "}";
        data2 = "{" + dataArr.slice(14, 26).join() + "}";
        data3 = "{" + dataArr.slice(26, 38).join();*/

        $.post('/api/setting/keep_parameter', { keep_parameter: true }, function (res) {
            // if (res == true) {
            //     $(".keep-parameter-ok p").text('固化参数成功')
            // } else {
            //     $(".keep-parameter-ok p").text('固化参数失败')
            // }
            // $(".mask").removeClass('hide').addClass("show");
            // $(".keep-parameter-ok").removeClass('hide').addClass("show");
        })
    })
    // 点击系统复位
    $(".reset").on('click', function () {
        $.post('/api/reset', { systemReset: true }, function (res) {
            renderSetting(res);
        })
    })
    // 点击WiFi弹窗确定
    $(".comfirm").on('click', function () {
        var data = {}; // 发送的JSON数据对象
        data.WiFiName = $(".WiFiName").val();
        data.WiFiPassword = $(".WiFiPassword").val();
        data.User = $(".User").val();
        data.Password = $(".Password").val();
        var dataStr = JSON.stringify(data); // 发送的JSON数据字符串
        $.post('/api/wifi_config', { data: dataStr }, function (res) {
            if (res.setting == 'ok') {
                $(".wifi-set-ok").removeClass('hide').addClass("show");
                $(".wifi-view").removeClass('show').addClass("hide");
            } else {
                $(".wifi-set-error").removeClass('hide').addClass("show");
                $(".wifi-view").removeClass('show').addClass("hide");
            }
        })
        // $(".mask").removeClass('show').addClass("hide");
        $(".wifi-view").removeClass('show').addClass("hide");
    })
    // 点击WiFi弹窗取消
    $(".cancel").on('click', function () {
        $(".mask").removeClass('show').addClass("hide");
        $(".wifi-view").removeClass('show').addClass("hide");
    })
    // 点击指令下发弹窗取消
    $(".iKnow").on('click', function () {
        $(".mask").removeClass('show').addClass("hide");
        $(".parameter-ok").removeClass('show').addClass("hide");
    })
    // 点击WiFi设置成功弹窗按钮
    $(".iKnowOk").on("click", function () {
        $(".mask").removeClass('show').addClass("hide");
        $(".wifi-set-ok").removeClass('show').addClass("hide");
    })
    $(".iKnowError").on("click", function () {
        $(".mask").removeClass('show').addClass("hide");
        $(".wifi-set-error").removeClass('show').addClass("hide");
    })
    // 固化参数弹窗
    $(".submit").on("click", function(){
        $(".mask").removeClass('hide').addClass("show");
        $(".parameter-ok").removeClass('hide').addClass("show");
    })
    // 系统复位弹窗
    $(".reset").on("click", function(){
        $(".mask").removeClass('hide').addClass("show");
        $(".parameter-ok").removeClass('hide').addClass("show");
    })
    // 警告弹窗
    $(".iKnowInfo").on("click", function () {
        $(".mask").removeClass('show').addClass("hide");
        $(".warning-info").removeClass('show').addClass("hide");
    })
    // 遮罩滑动界面禁止
    $(".mask").on('touchmove', function (event) {
        event.preventDefault();
    })
    // 点击上传
    $(".update").on('click', function () {
        $.post('/api/update_file', function (res) {
            console.log(res);
        })
    })
    // 点击报警弹窗
    $(".group p").on('click', function () {
        var parentName = $(this).parent().attr('class');

        if (parentName.indexOf('HF1') >= 0) { //硬件故障字1
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '0':
                    warningText = 'EPO故障';
                    break;
                case '1':
                    warningText = 'IGBT硬件过流';
                    break;
                case '2':
                    warningText = '母线硬件过压';
                    break;
                case '4':
                    warningText = '功率模块硬件过流';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('HF2') >= 0) { //硬件故障字2
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '0':
                    warningText = '辅助电源故障';
                    break;
                case '1':
                    warningText = '风扇故障';
                    break;
                case '2':
                    warningText = '连接故障';
                    break;
                case '4':
                    warningText = '交流测熔丝损坏';
                    break;
                case '8':
                    warningText = '功率模块过温';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('GF') >= 0) { //电网故障字
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '0':
                    warningText = '交流A相电压过压';
                    break;
                case '1':
                    warningText = '交流B相电压过压';
                    break;
                case '2':
                    warningText = '交流C相电压过压';
                    break;
                case '3':
                    warningText = '交流A相电压欠压';
                    break;
                case '4':
                    warningText = '交流B相电压欠压';
                    break;
                case '5':
                    warningText = '交流C相电压欠压';
                    break;
                case '6':
                    warningText = '电网过频';
                    break;
                case '7':
                    warningText = '电网欠频';
                    break;
                case '8':
                    warningText = '电网相序反';
                    break;
                case '9':
                    warningText = '输出A相过流';
                    break;
                case '10':
                    warningText = '输出B相过流';
                    break;
                case '11':
                    warningText = '输出C相过流';
                    break;
                case '12':
                    warningText = '电网电压不平衡超限';
                    break;
                case '13':
                    warningText = '输出电流不平衡超限';
                    break;
                case '14':
                    warningText = '电网缺相';
                    break;
                case '15':
                    warningText = '输出N线电流过流';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('BF') >= 0) { //母线故障字
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '0':
                    warningText = '预充电母线过压';
                    break;
                case '1':
                    warningText = '预充电母线欠压';
                    break;
                case '2':
                    warningText = '不控整流母线过压';
                    break;
                case '3':
                    warningText = '不控整流母线欠压';
                    break;
                case '4':
                    warningText = '运行母线过压';
                    break;
                case '5':
                    warningText = '运行母线欠压';
                    break;
                case '6':
                    warningText = '正负母线电压差超限';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('ACCF') >= 0) { //交流电容故障字
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '1':
                    warningText = '预充电A相交流电容过流';
                    break;
                case '2':
                    warningText = '预充电B相交流电容过流';
                    break;
                case '3':
                    warningText = '预充电C相交流电容过流';
                    break;
                case '4':
                    warningText = '运行交流电容电流过流';
                    break;
                case '5':
                    warningText = '运行交流电容电压过压';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('SF') >= 0) { //系统故障字
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '0':
                    warningText = '系统RAM故障';
                    break;
                case '1':
                    warningText = '系统EEPROM故障';
                    break;
                case '2':
                    warningText = '系统零漂过大故障';
                    break;
                case '3':
                    warningText = '系统后台通讯故障';
                    break;
                case '4':
                    warningText = '系统CAN通讯故障';
                    break;
                case '5':
                    warningText = 'CPLD故障';
                    break;
                case '6':
                    warningText = 'DataLog故障';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('CF') >= 0) { //接触器故障字
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '4':
                    warningText = '并网继电器闭合故障';
                    break;
                case '5':
                    warningText = '并网继电器断开故障';
                    break;
                case '6':
                    warningText = '并网继电器闭合状态检测故障';
                    break;
                case '7':
                    warningText = '并网继电器断开状态检测故障';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        } else if (parentName.indexOf('OF') >= 0) { //其他故障字
            var index = $(this).attr('index-data');
            var warningText;
            switch (index) {
                case '1':
                    warningText = '辅助DSP故障';
                    break;
                case '2':
                    warningText = 'DSP间同步故障';
                    break;
                case '4':
                    warningText = '电网电压谐波电压';
                    break;
                case '5':
                    warningText = '系统谐振故障';
                    break;
                default:
                    warningText = '无告警信息';
                    break;
            }
            $('.warning-info p').text(warningText)

        }
        if ($(this).attr('class').indexOf('warningCircle') >= 0) {
            $(".mask").removeClass('hide').addClass("show");
            $(".warning-info").removeClass('hide').addClass("show");
        }
    })
    // renderBase(simulateDataBase);
    // renderWarning(simulateDataWarning);
    // renderSetting(simulateDataSetting);
    // renderAbout(simulateDataAbout);
    // setUser(simulateDataUser);
});
function renderBase(data) {
    // var data = JSON.parse(str);
    for (var key in data) {
        if (data[key] instanceof Array === true) { // 判断是否为数组
            for (var i = 0; i < data[key].length; i++) {
                td = i + 2;
                $('.' + key + ' td:nth-child(' + td + ')').text(data[key][i])
            }
        } else {
            if (key == 'GVPS') {
                switch (data[key]) {
                    case '0':
                        $('.' + key + ' td:nth-child(3)').text('正序');
                        break;
                    case '1':
                        $('.' + key + ' td:nth-child(3)').text('负序');
                        break;
                    default:
                        break;
                }
            } else if (key == 'WorkStatus') {
                switch (data[key]) {
                    case '0':
                        $('.header span').text('无设备');
                        $('.no-link-icon').show();
                        $('.link-icon').hide();
                        break;
                    case '1':
                        $('.header span').text('运行中');
                        $('.no-link-icon').hide();
                    $('.link-icon').show();
                        break;
                    case '2':
                        $('.header span').text('故障');
                        $('.no-link-icon').hide();
                    $('.link-icon').show();
                        break;
                    case '3':
                        $('.header span').text('待机中');
                        $('.no-link-icon').hide();
                    $('.link-icon').show();
                        break;
                    default:
                        break;
                }
            } else {
                $('.' + key + ' td:nth-child(3)').text(data[key])
            }

        }
    }
}
function renderSetting(data) {
    // var data = JSON.parse(str);
    for (var key in data) {
        if (key == 'WorkStatus') {
            switch (data[key]) {
                case '0':
                    $('.header span').text('无设备');
                    $('.no-link-icon').show();
                    $('.link-icon').hide();
                    break;
                case '1':
                    $('.header span').text('运行中');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                case '2':
                    $('.header span').text('故障');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                case '3':
                    $('.header span').text('待机中');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                default:
                    break;
            }
        } else {
            $('.' + key).val(data[key]);
        }
    }
}
function renderWarning(data) {
    // var data = JSON.parse(data);
    for (var key in data) {
        if (key == 'WorkStatus') {
            switch (data[key]) {
                case '0':
                    $('.header span').text('无设备');
                    $('.no-link-icon').show();
                    $('.link-icon').hide();
                    break;
                case '1':
                    $('.header span').text('运行中');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                case '2':
                    $('.header span').text('故障');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                case '3':
                    $('.header span').text('待机中');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                default:
                    break;
            }
        } else {
            var val = Number(data[key]);
            var val2 = val.toString(2);
            var renderArray = [];
            for (var i = 0; i < val2.length; i++) { //遍历字符串
                renderArray.push(val2[i]);
            }
            renderArray.reverse();
            console.log('渲染数组：' + renderArray);
            for (var j = 0; j < renderArray.length; j++) {
                var h = j + 1;
                if (renderArray[j] == '1') {
                    console.log(j)
                    $('.' + key + ' p:nth-child(' + h + ')').addClass('warningCircle')
                } else {
                    $('.' + key + ' p:nth-child(' + h + ')').removeClass('warningCircle')
                }
            }
        }

    }
}
function renderAbout(data) {
    // var data = JSON.parse(str);
    for (var key in data) {
        if (key == 'WorkStatus') {
            switch (data[key]) {
                case '0':
                    $('.header span').text('无设备');
                    $('.no-link-icon').show();
                    $('.link-icon').hide();
                    break;
                case '1':
                    $('.header span').text('运行中');
                    
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                case '2':
                    $('.header span').text('故障');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                case '3':
                    $('.header span').text('待机中');
                    $('.no-link-icon').hide();
                    $('.link-icon').show();
                    break;
                default:
                    break;
            }
        } else {
            $('.' + key + ' td:nth-child(2)').text(data[key])
        }
    }
}
function setUser(data) {
    // var data = JSON.parse(str);
    for (var key in data) {
        $('.' + key).val(data[key]);
    }
}

function checkValue(className, min, max) {
    var limit = Number($("." + className).val());
    if (limit > max) {
        $("." + className).val(max);
    }
    if (limit < min) {
        $("." + className).val(min);
    }
}