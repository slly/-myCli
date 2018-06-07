const Utils = {

	serverUrl:"",  //后端请求地址

	doAjax:function(interfaceName,data,succFun,failFun,ajaxType) {
		$.ajax({
			type: ajaxType || "get",
			url: this.serverUrl + interfaceName,
			async: true,
			data:data,
			dataType:"JSON",
			timeout : 240000, //超时时间设置，单位毫秒
			beforeSend: function(request){},
			error: function(data) {
				failFun && failFun();
				Utils.showErrorMsg(data.msg);
			},
			success: function(data) {
				if(data.status>0){
					succFun && succFun(data);
				}else{
					Utils.showErrorMsg(data.msg);
				}
			},
			complete: function() {}
		})
	},

	//显示成功信息
	showSusseccMsg:function (text) {
		if($vm_){
			$vm_.$message({
				message: text,
				type: 'success'
			});
		}
	},

	//显示失败信息
	showErrorMsg:function (text) {
		if($vm_){
			$vm_.$message({
				message: text || "接口数据有误，请联系管理员~",
				type: 'warning'
			});
		}
	},

    //显示msgBox弹窗
	showMsgBox:function (text,title,options) {
		if($vm_){
			$vm_.$confirm(text, title, {
				confirmButtonText: options.sureBtnText||'确定',
				cancelButtonText: options.cancelBtnText||'取消',
				type: options.type||'warning'
			}).then(() => {
				options.sureFun && options.sureFun();
			}).catch(() => {
				options.cancelFun && options.cancelFun();
			});
		}
	},

	//获取链接参数
	getQueryString:function(str) {
		var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)", "i");
		var r = window.location.href.match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
	}
};
// exports.Utils = Utils;