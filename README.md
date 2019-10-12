api/base
市电电压有效值     	MVRMS		0.1V
市电电流有效值		MCRMS		0.1A
逆变电压有效值		IVRMS		0.1V
逆变电流有效值		ICRMS		0.1A
负载电压有效值		LVRMS		0.1V
负载电流有效值		LCRMS		0.1A
负载有功功率			LAP			10W
负载视在功率			LAPP		10VA
负载功率因素			LPF			无
负载率 				LR 			无
市电频率 			MF			无
输出状态				OS 			（1：逆变供电 3：市电供电）
工作状态				WS			（0：待机 1-3：启动中 4：运行 5：故障）
IGBT温度				IGBTT		℃
正母线电压			PBV			0.1V
负母线电压			NBV			0.1V
模块类型				MT 			（范围0-4096）

api/warning
故障字1				HAL1	
故障字2				HAL2
故障字3				HAL3
告警字1				WAR1
DSP故障记录条目数		DSPFRE		无
最新DSP故障记录索引	LDSPFRI		（0-254）
最旧DSP故障记录索引	ODSPFRI		（0-254）
DSP故障记录Tail		DSPFRT 		（0-254）
DSP故障记录Head		DSPFRH 		（0-254）
DSP故障记录ID0		DSPFR0 	 	（0-254）
DSP故障记录ID1		DSPFR1 		（0-254）
DSP故障记录ID2		DSPFR2 		（0-254）
DSP故障记录ID3		DSPFR3 		（0-254）
DSP故障记录ID4		DSPFR4 		（0-254）
DSP故障记录ID5		DSPFR5 		（0-254）
DSP故障记录ID6		DSPFR6 		（0-254）
DSP故障记录ID7		DSPFR7 		（0-254）
DSP故障记录ID8		DSPFR8 		（0-254）
DSP故障记录ID9		DSPFR9 		（0-254）
DSP故障记录ID10		DSPFR10 	（0-254）
DSP故障记录ID11		DSPFR11		（0-254）
DSP故障记录ID12		DSPFR12		（0-254）
DSP故障记录ID13		DSPFR13		（0-254）
DSP故障记录ID14		DSPFR14		（0-254）
DSP故障记录ID15		DSPFR15		（0-254）
DSP故障记录ID16		DSPFR16		（0-254）
DSP故障记录ID17		DSPFR17		（0-254）
DSP故障记录ID18		DSPFR18		（0-254）
DSP故障记录ID19		DSPFR19		（0-254）
DSP故障记录ID20		DSPFR20		（0-254）

api/setting
#开关机控制1			PSW1		无
#开关机控制2			PSW2		无
开关机控制 			SW 			(1:开机 0：关机)
额定输出电压			ROV			0.1V
启动模式				SMODE		（1：开 0：关）
系统过温点			SOT 		℃
市电电压高异常点		MVHAP		0.1V
市电电压高异常恢复点	MVHARP 		0.1V
市电电压低异常点		MVLAP 		0.1V
市电电压低异常恢复点	MVLARP 		0.1V
市电高低压异常确认时间 MHLVACT	10ms
整流过流点			ROP 		0.1A
整流过流保护时间		ROPT	  	10ms
市电高压切断点		MHVCP		0.1V
市电高压切断恢复点  	MHVCRP 		0.1V
市电低压切断点		MLVCP 		0.1V
市电低压切断恢复点	MLVCRP 		0.1V
市电高低压故障切断确认时间  MHLVFCCT 		10ms
工作模式				WMODE		（范围0-5）
24小时市电切逆变允许次数	DAYMICAT	（范围0-100）
24小时逆变切市电允许次数	DAYIMCAT 	（范围0-100）
旁路供电保持时间		BPSHT 		1min
逆变供电保持时间		IPSHT 		1min
MODBUS地址			MODADDR 	1-254






