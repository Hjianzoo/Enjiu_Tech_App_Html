电网电压有效值 : GVRMS: '1','2','3'
电网电压THDU : GVTHDU: '1','2','3'
电网电压频率 : GVHZ
电网电压相序 : GVPS

电网电流有效值 ：GCRMS: '1','2','3'
电网电流功率因数 ：GCPF: '1','2','3'
电网电流THDI ：GCTHDI: '1','2','3'

负载电流有效值 ：LCRMS: '1','2','3'
负载电流功率因数 ：LCPF: '1','2','3'
负载电流THDI ：LCTHDI: '1','2','3'

补偿电流有效值 ：CCRMS: '1','2','3'
设备温度 : DT

电网侧有功功率 : GSAP: '1','2','3'
电网侧无功功率 : GSRP: '1','2','3'
电网侧视在功率 : GSVP: '1','2','3'

负载侧有功功率 : LSAP: '1','2','3'
负载侧无功功率 : LSRP: '1','2','3'
负载侧视在功率 : LSVP: '1','2','3'

开关机 : Switch  开: 1, 关: 0
启动模式 : StartMode  手动: 0, 自动: 1
工作模式 : WorkMode  谐波模式: 1, SVG模式: 2, BSVG模式: 4 
CT位置 : CTLoction  负载测: 0, 电网测: 1
CT反接适配 : CTAdapter  使能: 1, 禁止使能: 0
CT变比 : CTRatio 
系统容量 : SC
允许相序 : APS  正序: 0, 负序: 1
ECO使能 : ECOE  使能: 1, 禁止使能: 0
ECO启动电流 : ECOSC
ECO关闭电流 : ECOEC
ECO启动不平衡度 : ECOSU
ECO关闭不平衡度 : ECOEU
2次谐波使能 : 2Har  使能: 1, 禁止使能: 0
4次谐波使能 : 4Har  使能: 1, 禁止使能: 0
5次谐波使能 : 5Har  使能: 1, 禁止使能: 0
7次谐波使能 : 7Har  使能: 1, 禁止使能: 0
8次谐波使能 : 8Har  使能: 1, 禁止使能: 0
10次谐波使能 : 10Har  使能: 1, 禁止使能: 0
11次谐波使能 : 11Har  使能: 1, 禁止使能: 0
12次谐波使能 : 12Har  使能: 1, 禁止使能: 0
13次谐波使能 : 13Har  使能: 1, 禁止使能: 0
14次谐波使能 : 14Har  使能: 1, 禁止使能: 0
15次谐波使能 : 15Har  使能: 1, 禁止使能: 0
16次谐波使能 : 16Har  使能: 1, 禁止使能: 0
17次谐波使能 : 17Har  使能: 1, 禁止使能: 0
18次谐波使能 : 18Har  使能: 1, 禁止使能: 0
19次谐波使能 : 19Har  使能: 1, 禁止使能: 0
20次谐波使能 : 20Har  使能: 1, 禁止使能: 0
重复控制 : RC
重复控制使能 : RCE  使能: 1, 禁止使能: 0
功率等级 : PL
电流等级 : CL
模块补偿容量 : MCC
额降系数 : DC
风扇高速档电流 : FHSC
风扇低速档电流 : FLSC

（以下字段都为16位二进制数，例0111010101110101）
硬件故障字1 : HF1
硬件故障字2 : HF2
电网故障字 : GF 
母线故障字 : BF
交流电容故障字 : ACCF
系统故障字 : SF
接触器故障字 : CF
其他故障字 : OF

控制DSP固件 : CDSP
辅助DSP固件 : ADSP
FPGA固件 : FPGA
WiFi版本 : WiFiV
WiFi 跟新文件入口 : WiFiUF

系统复位 : systemReset

<!-- 暂时屏蔽 语言 : Language  1:中文, 2:英文 --> 
WiFi : WiFiName
WiFi密码 : WiFiPassword
用户名 : User
用户登陆密码 ：Password

登陆成功: login ok:成功, error:失败
设置成功: setting ok:成功, error:失败

设备状态 : WorkStatus 0:无设备 1:运行中, 2:故障, 3:待机中

get路径：
基本：api/base
设置：api/setting
告警：api/warning
关于：api/about

post路径：
设备参数设置：api/setting
系统复位： api/reset
wifi设置：api/wifi_config
登陆界面：api/login_in
固化参数：api/setting/keep_parameter

数据格式
{"Switch":"1","StartMode":"1","WorkMode":"1","CTLoction":"1","CTAdapter":"1","AllowPhaseSequence":"1","ECOEnabled":"1","2HarmonicEnable":"1","4HarmonicEnable":"1","5HarmonicEnable":"1","7HarmonicEnable":"1","8HarmonicEnable":"1","10HarmonicEnable":"1","11HarmonicEnable":"1","12HarmonicEnable":"1","13HarmonicEnable":"1","14HarmonicEnable":"1","15HarmonicEnable":"1","16HarmonicEnable":"1","17HarmonicEnable":"1","18HarmonicEnable":"1","19HarmonicEnable":"1","20HarmonicEnable":"1","RepeatControlEnable":"1","CTRatio":"11","SystemCapacity":"12","ECOStartCurrent":"13","ECOEndCurrent":"14","ECOStartUnbalanced":"15","ECOEndUnbalanced":"16","RepeatControl":"17","PowerLevel":"18","CurrentLevel":"19","ModuleCompensationCapacity":"20","DropCoefficient":"21","FanHighSpeedCurrent":"22"}