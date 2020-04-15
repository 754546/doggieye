<template>
	<view class="content">
		<view class="jump" @click="jump" v-show="show&&!code">
			<p>前往</p>
			<p>问卷调查</p>
		</view>
		<view class="list_img" v-if="!code">
			<image src="../static/imgs1.jpg" mode="widthFix"></image>
			<image src="../static/imgs2.jpg" mode="widthFix"></image>
			<image src="../static/imgs3.jpg" mode="widthFix"></image>
			<image src="../static/imgs4.jpg" mode="widthFix"></image>
			<image src="../static/imgs5.jpg" mode="widthFix"></image>
			<image src="../static/imgs6.jpg" mode="widthFix"></image>
			<image src="../static/imgs7.jpg" mode="widthFix"></image>
		</view>
		<view class="head" id="mybox">
			<view class="list"  v-if="!code">
				<view :class="{'borderRed':questionStyle1,'question':true}" id="question1" >
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>1</view>
							<view>您现在的身份？</view>
						</view>
						<radio-group @change="radioChange" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="爸爸"/>爸爸</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="妈妈"/>妈妈</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="怀孕中"/>怀孕中</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="还没有宝宝"/>还没有宝宝</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle2,'question':true}" id="question2" >
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>2</view>
							<view>您属于以下哪个年龄层？</view>
						</view>
						<radio-group @change="radioChange2" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="70后或80后"/>70后或80后</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="85后"/>85后</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="90后"/>90后</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="95后"/>95后</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle3,'question':true}" id="question3">
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>3</view>
							<view>您孩子现在的年龄段是？</view>
						</view>
						<radio-group @change="radioChange3" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="3岁以下"/>3岁以下</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="3-6岁"/>3-6岁</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="7-10岁"/>7-10岁</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="10岁以上"/>10岁以上</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="暂无小孩"/>暂无小孩</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle4,'question':true}" id="question4" >
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>4</view>
							<view>您是什么类型的父母？</view>
						</view>
						<radio-group @change="radioChange4" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="家庭型宝爸/宝妈：天大地大，孩子最大"/>家庭型宝爸/宝妈：天大地大，孩子最大</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="事业型宝爸/宝妈：工作第一，孩子第二"/>事业型宝爸/宝妈：工作第一，孩子第二</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="个性型宝爸/宝妈：佛系养娃，一切随缘"/>个性型宝爸/宝妈：佛系养娃，一切随缘</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="全能型宝爸/宝妈：工作带娃，两手不误"/>全能型宝爸/宝妈：工作带娃，两手不误</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="暂无小孩"/>暂无小孩</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle5,'question':true}" id="question5">
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>5</view>
							<view>您对给小孩子读睡前故事，这件事怎么看？</view>
						</view>
						<radio-group @change="radioChange5" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="很享受，温馨童趣的故事，有助于增进感情"/>很享受，温馨童趣的故事，有助于增进感情</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="无奈的选择，哄觉必备技能"/>无奈的选择，哄觉必备技能</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="是一种很好的沟通方式，用故事的方式来表达问题，简单易懂"/>是一种很好的沟通方式，用故事的方式来表达问题，简单易懂</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="有心无力，没时间"/>有心无力，没时间</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="觉得没什么用，故事都是骗人的"/>觉得没什么用，故事都是骗人的</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle6,'question':true}" id="question6">
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>6</view>
							<view>您对小孩使用手机玩APP怎么看？</view>
						</view>
						<radio-group @change="radioChange6" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="挺好，提前感知新鲜事物。"/>挺好，提前感知新鲜事物。</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="还行，手机上有好的东西，也有不好的东西"/>还行，手机上有好的东西，也有不好的东西</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="一般，没什么看法，现在不都这样吗？"/>一般，没什么看法，现在不都这样吗？</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="不好，小孩缺乏自控力，容易上瘾。"/>不好，小孩缺乏自控力，容易上瘾。</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle7,'question':true}" id="question7">
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>7</view>
							<view>您为孩子购买玩具的方式是？</view>
						</view>
						<radio-group @change="radioChange7" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="网上购买"/>网上购买</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="线下实体店购买"/>线下实体店购买</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="自己动手制作"/>自己动手制作</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="朋友赠送"/>朋友赠送</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="不购买"/>不购买</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle8,'question':true}" id="question8">
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>8</view>
							<view>您为孩子购买玩具的频次？</view>
						</view>
						<radio-group @change="radioChange8" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="1个月1次"/>1个月1次</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="1个月2-3次"/>1个月2-3次</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="不固定，孩子喜欢就买"/>不固定，孩子喜欢就买</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="基本不购买"/>基本不购买</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="其他"/>其他</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle9,'question':true}" id="question9">
					<view class="container">
						<view class="title">
							<view>*</view>
							<view>9</view>
							<view>您购买玩具时最看重以下哪个方面？</view>
						</view>
						<radio-group @change="radioChange9" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="安全。安全、安全、安全，重要的事情说三遍"/>安全。安全、安全、安全，重要的事情说三遍</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="质量。不要减配，一分钱一分货"/>质量。不要减配，一分钱一分货</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="外观。选择恐惧症"/>外观。选择恐惧症</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="环保。低碳节能，绿色无污染"/>环保。低碳节能，绿色无污染</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="有趣。玩具是买来玩的，不是买来看的"/>有趣。玩具是买来玩的，不是买来看的</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle10,'question':true}" id="question10">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>10</view>
							<view>您是否有为孩子购买过教具？请列举1-3个教具品牌？</view>
						</view>
						<radio-group @change="radioChange10" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="有"/>有<input type="text" maxlength="100" v-model="questions10" @change="radioChanges10(questions10)"/></label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="没有"/>没有</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle11,'question':true}" id="question11">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>11</view>
							<view>您是否愿意尝试通过订阅（每月寄送到家）的方式购买玩具？</view>
						</view>
						<radio-group @change="radioChange11" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="愿意。一次订阅，每月寄送，省时省力"/>愿意。一次订阅，每月寄送，省时省力</label>
								
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="不愿意。想亲自为孩子挑选玩具"/>不愿意。想亲自为孩子挑选玩具</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle12,'question':true}" id="question12">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>12</view>
							<view>请列举1-3个您或孩子经常使用的与儿童相关的APP或公众号？</view>
						</view>
						<radio-group @change="radioChange12" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="有"/>有<input type="text" maxlength="100" v-model="questions12" @change="radioChanges12(questions12)" /></label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="没有"/>没有</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle13,'question':true}" id="question13">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>13</view>
							<view>您一般通过什么方式增长孩子的见闻，帮助孩子认知世界？</view>
						</view>
						<radio-group @change="radioChange13" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="电视新闻"/>电视新闻</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="书籍、故事"/>书籍、故事</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="玩具"/>玩具</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="早教、幼儿园"/>早教、幼儿园</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="旅游"/>旅游</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="顺其自然"/>顺其自然</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle14,'question':true}" id="question14">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>14</view>
							<view>您对通过玩具的方式帮助孩子认知世界，这件事怎么看？</view>
						</view>
						<radio-group @change="radioChange14" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="十分期待。用玩具打开认知世界的大门，有趣又新颖"/>十分期待。用玩具打开认知世界的大门，有趣又新颖</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="愿意尝试。玩具身上做文章，别出心裁"/>愿意尝试。玩具身上做文章，别出心裁</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="将信将疑。到底是玩物丧志还是能玩出一个“小目标”"/>将信将疑。到底是玩物丧志还是能玩出一个“小目标”</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="完全不信。从玩具到认知世界，风马牛不相及"/>完全不信。从玩具到认知世界，风马牛不相及</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="已经麻木。市面上同类型产品很多，喊得比做得好听"/>已经麻木。市面上同类型产品很多，喊得比做得好听</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle15,'question':true}" id="question15">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>15</view>
							<view>您一般通过什么方式增长孩子的见闻，帮助孩子认知世界？</view>
						</view>
						<view class="inputs">
							<view>
								<label class="radio"><view>1. </view><input type="text" v-model="way1" @change="input15" maxlength="100"/></label>
							</view>
							<view>
								<label class="radio"><view>2. </view><input type="text"  v-model="way2" @change="input15" maxlength="100"/></label>
							</view>
							<view>
								<label class="radio"><view>3. </view><input type="text"   v-model="way3" @change="input15" maxlength="100"/></label>
							</view>
						</view>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle16,'question':true}" id="question16">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>16</view>
							<view>您和其他家长讨论孩子或分享育儿经验的频率是？</view>
						</view>
						<radio-group @change="radioChange16" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="基本很少"/>基本很少</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="一年一两次"/>一年一两次</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="每几个月讨论一次"/>每几个月讨论一次</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="每月一两次"/>每月一两次</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="每周一两次"/>每周一两次</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle17,'question':true}" id="question17">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>17</view>
							<view>在帮助孩子学习新事物时（包括手工活动、学习），您的参与度是？</view>
						</view>
						<radio-group @change="radioChange17" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="很少参与"/>很少参与</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="偶尔参与一小部分"/>偶尔参与一小部分</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="绝大多数时候都会参与"/>绝大多数时候都会参与</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="只要看到，基本都会参与"/>只要看到，基本都会参与</label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle18,'question':true}" id="question18">
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>18</view>
							<view>您和孩子的关系如何呢？</view>
						</view>
						<radio-group @change="radioChange18" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="传统父母和子女的关系，父母拥有绝对权威"/>传统父母和子女的关系，父母拥有绝对权威</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="相对比较随意，对孩子属于散养型，自然发展"/>相对比较随意，对孩子属于散养型，自然发展</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="朋友一般亲密无间，互相尊重"/>朋友一般亲密无间，互相尊重</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="关系较为紧张，谁也不听谁的"/>关系较为紧张，谁也不听谁的</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="其他"/><view>其他</view><input type="text" v-model="questions18"  @change="radioChanges18(questions18)" maxlength="100"/></label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle19,'question':true}" id="question19" >
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>19</view>
							<view>您的另一半和孩子的关系如何呢？</view>
						</view>
						<radio-group @change="radioChange19" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="传统父母和子女的关系，母亲拥有绝对权威"/>传统父母和子女的关系，母亲拥有绝对权威</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="相对比较随意，对孩子属于散养型，自然发展"/>相对比较随意，对孩子属于散养型，自然发展</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="朋友一般亲密无间，互相尊重"/>朋友一般亲密无间，互相尊重</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="关系较为紧张，谁也不听谁的"/>关系较为紧张，谁也不听谁的</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="其他"/><view>其他</view><input type="text" v-model="questions19"  @change="radioChanges19(questions19)" maxlength="100" /></label>
							</view>
						</radio-group>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle20,'question':true}" id="question20" >
					<view class="container">
						<view class="title title1">
							<view>*</view>
							<view>20</view>
							<view>您一周通常哪些时间有空陪伴孩子？（可多选）</view>
						</view>
						<view class="time_list">
							<view></view>
							<view>上午</view>
							<view>中午</view>
							<view>下午</view>
						</view>
						<view>
							<checkbox-group class="checkbox-group" @change="changeCheckbox1">
								<view>周一</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
							<checkbox-group class="checkbox-group" @change="changeCheckbox2">
								<view>周二</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
							<checkbox-group class="checkbox-group" @change="changeCheckbox3">
								<view>周三</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
							<checkbox-group class="checkbox-group" @change="changeCheckbox4">
								<view>周四</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
							<checkbox-group class="checkbox-group" @change="changeCheckbox5">
								<view>周五</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
							<checkbox-group class="checkbox-group" @change="changeCheckbox6">
								<view>周六</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
							<checkbox-group class="checkbox-group" @change="changeCheckbox7">
								<view>周日</view>
								<label>
									<checkbox value="上午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="中午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
								<label>
									<checkbox value="下午" color="#8BC7FF" style="transform:scale(0.7)" />
								</label>
							</checkbox-group>
						</view>
					</view>
				</view>
				<view :class="{'borderRed':questionStyle21,'borderRed':questionStyle22,'question':true}"  id="question21">
					<view class="container">
						<view class="inputs1">
							<view>
								<label class="radio"><view>*</view><view>填写人：</view><input type="text" v-model="userName" maxlength="20"/></label>
							</view>
							<view>
								<label class="radio"><view>*</view><view>手机号：</view><input type="number" v-model="userPhone" maxlength="11"/></label>
							</view>
							<view>
								<label class="radio"><view style="margin-left: 20upx;">邀请码：</view><input type="text" v-model="salesmanCode" /></label>
							</view>
						</view>
					</view>
				</view>
				<view class="footer">
					<view class="footer_list">
						<radio-group @change="radioChange21" class="radio-group">
							<view>
								<label class="radio"><radio color="#8BC7FF" value="可以电话和短信" checked="true"/>可以电话和短信</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="可以电话"/>可以电话</label>
							</view>
							<view>
								<label class="radio"><radio color="#8BC7FF" value="可以短信"/>可以短信</label>
							</view>
							
							<view>
								<label class="radio"><radio color="#8BC7FF" value="不可以"/>不可以</label>
							</view>
						</radio-group>
					</view>
					<button  class="buttons" @click="submit">提交</button>
				</view>
			</view>
			<view class="code" v-else @touchmove.stop.prevent="moveHandle">
				<view class="code_img">
					<image src="../static/popup.png" ></image>
				</view>
			</view>
		</view>
		<view class="hint" v-if="hint" @touchmove.stop.prevent="moveHandle">
			<view class="submit">
				<view >
					<text v-if="wenzi">{{wenzi}}</text>
					<text v-else>您还有{{nubmer}}题未填完还不能提交哦~</text>
				</view>
				<view @click="cancle">
					我知道了
				</view>
			</view>
			
		</view>
		<view class="hint1" v-if="hint1" @touchmove.stop.prevent="moveHandle">
			<view>
				<image src="../static/close.png" class="close" @click="close"></image>
				<image src="../static/popup.png" class="popup_img"></image>
			</view>
			
		</view>
	</view>

</template>

<script>
	import {post,toast} from '@/index';
	export default {
		data() {
			return {
				nubmer:0,
				Identity:'',
				userName:'',
				userPhone:'',
				salesmanCode:'',
				question1:'',
				question2:'',
				question3:'',
				question4:'',
				question5:'',
				question6:'',
				question7:'',
				question8:'',
				question9:'',
				question10:'',
				question11:'',
				question12:'',
				question13:'',
				question14:'',
				question15:[],
				question16:'',
				question17:'',
				question18:'',
				question19:'',
				question20:{
					'周一':[],
					'周二':[],
					'周三':[],
					'周四':[],
					'周五':[],
					'周六':[],
					'周日':[],
				},
				questions10:'',
				questions12:'',
				way1:'',
				way2:'',
				way3:'',
				questions18:'',
				questions19:'',
				question21:'可以电话和短信',
				questionStyle1:false,
				questionStyle2:false,
				questionStyle3:false,
				questionStyle4:false,
				questionStyle5:false,
				questionStyle6:false,
				questionStyle7:false,
				questionStyle8:false,
				questionStyle9:false,
				questionStyle10:false,
				questionStyle11:false,
				questionStyle12:false,
				questionStyle13:false,
				questionStyle14:false,
				questionStyle15:false,
				questionStyle16:false,
				questionStyle17:false,
				questionStyle18:false,
				questionStyle19:false,
				questionStyle20:false,
				questionStyle21:false,
				questionStyle22:false,
				hint:false,
				scrollTop: 0,
				wenzi:'',
				code:0,
				hint1:false,
				show:true
			}
		},
		onLoad() {
			if(uni.getStorageSync('code')){
				this.code=uni.getStorageSync('code')
			}
			document.title = '用户调查问卷';
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			var box = document.getElementById('mybox');
			if(e.scrollTop>=box.offsetTop){
				this.show=false
			}else{
				this.show=true
			}
		},
		methods: {
			jump:function(){
				var top=document.getElementById('mybox').offsetTop;
				uni.pageScrollTo({
					scrollTop: top,
					duration:0
				});
				this.show=false;
			},
			moveHandle:function(){},
			close:function(){
				this.hint1=false;
				location.reload();
			},
			input15:function(){
				this.question15=[];
				if(this.way1){
					this.question15.push(this.way1)
				}
				if(this.way2){
					this.question15.push(this.way2)
				}
				if(this.way3){
					this.question15.push(this.way3)
				}
			},
			cancle:function(){
				this.hint=false;
				if(!this.wenzi){
					uni.pageScrollTo({
						scrollTop: this.scrollTop,
						duration:0
					});
				}
			},
			radioChange:function(e){
				this.question1=e.detail.value
				console.log(this.question1)
			},
			radioChange2:function(e){
				this.question2=e.detail.value
				console.log(this.question2)
			},
			radioChange3:function(e){
				this.question3=e.detail.value
				console.log(this.question3)
			},
			radioChange4:function(e){
				this.question4=e.detail.value
				console.log(this.question4)
			},
			radioChange5:function(e){
				this.question5=e.detail.value
				console.log(this.question5)
			},
			radioChange6:function(e){
				this.question6=e.detail.value
				console.log(this.question6)
			},
			radioChange7:function(e){
				this.question7=e.detail.value
				console.log(this.question7)
			},
			radioChange8:function(e){
				this.question8=e.detail.value
				console.log(this.question8)
			},
			radioChange9:function(e){
				this.question9=e.detail.value
				console.log(this.question9)
			},
			radioChange10:function(e){
				if(e.detail.value=='有'){
					this.question10=this.questions10;
				}else{
					this.question10=e.detail.value
				}
				console.log(this.question10)
			},
			radioChange11:function(e){
				this.question11=e.detail.value
				console.log(this.question11)
			},
			radioChange12:function(e){
				if(e.detail.value=='有'){
					this.question12=this.questions12;
				}else{
					this.question12=e.detail.value
				}
				console.log(this.question12)
			},
			radioChange13:function(e){
				this.question13=e.detail.value
				console.log(this.question13)
			},
			radioChange14:function(e){
				this.question14=e.detail.value
				console.log(this.question14)
			},
			radioChange16:function(e){
				this.question16=e.detail.value
				console.log(this.question16)
			},
			radioChange17:function(e){
				this.question17=e.detail.value
				console.log(this.question17)
			},
			radioChange18:function(e){
				if(e.detail.value=='其他'&&this.questions18){
					this.question18=this.questions18;
				}else{
					this.question18=e.detail.value
				}
				console.log(this.question18)
			},
			radioChanges18:function(e){
				this.question18=this.questions18;
			},
			radioChanges12:function(e){
					this.question12=this.questions12;
			},
			radioChanges10:function(e){
					this.question10=this.questions10;
			},
			radioChange19:function(e){
				if(e.detail.value=='其他'&&this.questions19){
					this.question19=this.questions19;
				}else{
					this.question19=e.detail.value
				}
				console.log(this.question19)
			},
			radioChanges19:function(e){
				this.question19=this.questions19;
			},
			radioChange21:function(e){
				this.question21=e.detail.value
				console.log(this.question21)
			},
			changeCheckbox1:function(e){
				this.question20.周一=e.detail.value
				console.log(this.question20)
			},
			changeCheckbox2:function(e){
				this.question20.周二=e.detail.value
				console.log(this.question20)
			},
			changeCheckbox3:function(e){
				this.question20.周三=e.detail.value
				console.log(this.question20)
			},
			changeCheckbox4:function(e){
				this.question20.周四=e.detail.value
				console.log(this.question20)
			},
			changeCheckbox5:function(e){
				this.question20.周五=e.detail.value
				console.log(this.question20)
			},
			changeCheckbox6:function(e){
				this.question20.周六=e.detail.value
				console.log(this.question20)
			},
			changeCheckbox7:function(e){
				this.question20.周日=e.detail.value
				console.log(this.question20)
			},
			submit:function(){
				this.wenzi=''
				if(!this.question1){
					this.hint=true;
					this.scrollTop= document.getElementById('question1').offsetTop-10;
				}else if(!this.question2){
					this.hint=true;
					this.scrollTop=document.getElementById('question2').offsetTop-10;
				}
				else if(!this.question3){
					this.hint=true;
					this.scrollTop=document.getElementById('question3').offsetTop-10;
				}
				else if(!this.question4){
					this.hint=true;
					this.scrollTop=document.getElementById('question4').offsetTop-10;
				}
				else if(!this.question5){
					this.hint=true;
					this.scrollTop=document.getElementById('question5').offsetTop-10;
				}
				else if(!this.question6){
					this.hint=true;
					this.scrollTop=document.getElementById('question6').offsetTop-10;
				}
				else if(!this.question7){
					this.hint=true;
					this.scrollTop=document.getElementById('question7').offsetTop-10;
				}
				else if(!this.question8){
					this.hint=true;
					this.scrollTop=document.getElementById('question8').offsetTop-10;
				}
				else if(!this.question9){
					this.hint=true;
					this.scrollTop=document.getElementById('question9').offsetTop-10;
				}else if(!this.question10){
					this.hint=true;
					this.scrollTop=document.getElementById('question10').offsetTop-10;
				}else if(!this.question11){
					this.hint=true;
					this.scrollTop=document.getElementById('question11').offsetTop-10;
				}else if(!this.question12){
					this.hint=true;
					this.scrollTop=document.getElementById('question12').offsetTop-10;
				}else if(!this.question13){
					this.hint=true;
					this.scrollTop=document.getElementById('question13').offsetTop-10;
				}else if(!this.question14){
					this.hint=true;
					this.scrollTop=document.getElementById('question14').offsetTop-10;
				}else if(!this.question15[0]&&!this.question15[1]&&!this.question15[2]){
					this.hint=true;
					this.scrollTop=document.getElementById('question15').offsetTop-10;
				}else if(!this.question16){
					this.hint=true;
					this.scrollTop=document.getElementById('question16').offsetTop-10;
				}else if(!this.question17){
					this.hint=true;
					this.scrollTop=document.getElementById('question17').offsetTop-10;
				}else if(!this.question18){
					this.hint=true;
					this.scrollTop=document.getElementById('question18').offsetTop-10;
				}else if(!this.question19){
					this.hint=true;
					this.scrollTop=document.getElementById('question19').offsetTop-10;
				}else if(this.question20.周一.length<1&&this.question20.周二.length<1&&this.question20.周三.length<1&&this.question20.周四.length<1&&this.question20.周五.length<1&&this.question20.周六.length<1&&this.question20.周日.length<1){
					this.hint=true;
					this.scrollTop=document.getElementById('question20').offsetTop-10;
				}else if(!this.userName){
					this.wenzi='填写人还未填还不能提交哦~'
					this.hint=true;
				}else if(!this.userPhone){
					this.wenzi='手机号还没未填还不能提交哦~'
					this.hint=true;
				}else if(!(/^1\d{10}$/).test(this.userPhone)){
					this.wenzi='手机号格式不正确哦~'
					this.hint=true;
				}else{
					var data={
					  "question1": this.question1,
					   "question2":this.question2,
					   "question3": this.question3,
					   "question4": this.question4,
					   "question5": this.question5,
					   "question6": this.question6,
					   "question7": this.question7,
					   "question8": this.question8,
					   "question9": this.question9,
					  "question10": this.question10,
					  "question11": this.question11,
					  "question12": this.question12,
					  "question13": this.question13,
					  "question14": this.question14,
					  "question15": this.question15.toString(),
					  "question16": this.question16,
					  "question17": this.question17,
					  "question18": this.question18,
					  "question19": this.question19,
					  "question20": JSON.stringify(this.question20),
					  "question21": this.question21,
					  "salesmanCode":this.salesmanCode,
					  "userName":this.userName,
					  "userPhone":this.userPhone,
					}
					uni.showLoading({
					    title: '提交中'
					});
					post("/questionnaire/question1/save",data).then((res)=>{
						uni.hideLoading();
						if(res[1].data.code==200){
							uni.setStorageSync('code',1);
							this.hint1=true;
						}else{
							toast(res[1].data.msg)
						}
					}).catch((res)=>{
						uni.hideLoading();
						toast(res[1].data.msg)
					})
				}
				this.nubmer=0;
				if(!this.question1){
					this.questionStyle1=true;
					this.nubmer++;
				}else{
						this.questionStyle1=false;
				}
				if(!this.question2){
					this.questionStyle2=true;
					this.nubmer++;
				}else{
						this.questionStyle2=false;
				}
				if(!this.question3){
					this.questionStyle3=true;
					this.nubmer++;
				}else{
					this.questionStyle3=false;
				}
				if(!this.question4){
					this.questionStyle4=true;
					this.nubmer++;
				}else{
					this.questionStyle4=false;
				}
				if(!this.question5){
					this.questionStyle5=true;
					this.nubmer++;
				}else{
					this.questionStyle5=false;
				}
				if(!this.question6){
					this.questionStyle6=true;
					this.nubmer++;
				}else{
					this.questionStyle6=false;
				}
				if(!this.question7){
					this.questionStyle7=true;
					this.nubmer++;
				}else{
					this.questionStyle7=false;
				}
				if(!this.question8){
					this.questionStyle8=true;
					this.nubmer++;
				}else{
					this.questionStyle8=false;
				}
				if(!this.question9){
					this.questionStyle9=true;
					this.nubmer++;
				}else{
					this.questionStyle9=false;
				}
				 if(!this.question10){
					this.questionStyle10=true;
					this.nubmer++;
				}else{
					this.questionStyle10=false;
				}
				 if(!this.question11){
					this.questionStyle11=true;
					this.nubmer++;
				}
				else{
					this.questionStyle11=false;
				}
				 if(!this.question12){
					this.questionStyle12=true;
					this.nubmer++;
				}else{
					this.questionStyle12=false;
				}
				 if(!this.question13){
					this.questionStyle13=true;
					this.nubmer++;
				}else{
					this.questionStyle13=false;
				}
				 if(!this.question14){
					this.questionStyle14=true;
					this.nubmer++;
				}else{
					this.questionStyle14=false;
				}
				 if(!this.question15[0]&&!this.question15[1]&&!this.question15[2]){
					this.questionStyle15=true;
					this.nubmer++;
				}else{
					this.questionStyle15=false;
				}
				 if(!this.question16){
					this.questionStyle16=true;
					this.nubmer++;
				}
				else{
					this.questionStyle16=false;
				}
				 if(!this.question17){
					this.questionStyle17=true;
					this.nubmer++;
				}else{
					this.questionStyle17=false;
				}
				 if(!this.question18){
					this.questionStyle18=true;
					this.nubmer++;
				}else{
					this.questionStyle18=false;
				}
				 if(!this.question19){
					this.questionStyle19=true;
					this.nubmer++;
				}else{
					this.questionStyle19=false;
				}
				if(this.question20.周一.length<1&&this.question20.周二.length<1&&this.question20.周三.length<1&&this.question20.周四.length<1&&this.question20.周五.length<1&&this.question20.周六.length<1&&this.question20.周日.length<1){
					this.questionStyle20=true;
					this.nubmer++;
				}else{
					this.questionStyle20=false;
				}
				if(!this.userName){
					this.questionStyle21=true;
				}else{
					this.questionStyle21=false;
				}
				if(!this.userPhone){
					this.questionStyle22=true;
				}else{
					this.questionStyle22=false;
				}
			}
			
		}
	}
</script>
<style scope>
	>>>uni-radio .uni-radio-wrapper{
		width: 56upx;
		height: 34upx;
	}
	>>>uni-radio{
		display: flex;
	}
	.uni-label-pointer{
		display: flex;
	}
	>>>uni-radio .uni-radio-wrapper .uni-radio-input{
		border-color:#C2E9FF;
		width: 36upx;
		height: 36upx;
		/* margin-right: 20upx; */
		margin-top: 8upx;
	}
	>>> .time_radio uni-radio{
		width: 25%;
		display: flex;
		justify-content: center;
	}
</style>
<style scoped lang="scss">
.jump{
	width:120upx;
	height: 120upx;
	border-radius: 50%;
	background:rgba(139, 199, 255,0.8);
	position: fixed;
	top: 100upx;
	right: 50upx;
	z-index: 99;
	p{
		font-size: 20upx;
		color: #FFFFFF;
		line-height: 30upx;
		width: 100%;
		text-align: center;
	}
	p:first-child{
		margin-top: 24upx;
	}
}
.list_img{
	width: 100%;
	image{
		width: 100%;
		display: block;
	}
}
.hint1{
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,0.3);
	position: fixed;
	top: 0;
	left: 0;
	view{
		width: 100%;
		height: 100%;
		position: relative;
		.popup_img{
			width: 630upx;
			height: 400upx;
			position:absolute;
			top: 200upx;
			left: 60upx;
		}
		.close{
			width: 66upx;
			height: 66upx;
			position:absolute;
			top: 180upx;
			left: 620upx;
			z-index: 999;
		}
	}
}
.code{
	width: 100%;
	height: 100vh;
	background: url(../static/bg-finished.png);
	background-size: 100%;
	.code_img{
		width: 100%;
		height: 100%;
		// background: rgba(0,0,0,0.3);
		overflow: hidden;
		image{
			width: 630upx;
			height: 400upx;
			display: block;
			position: absolute;
			bottom:0;
			left:60upx;
		}
	}
}
.hint{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,0.3);
	overflow: hidden;
	z-index: 99999999;
	overflow: hidden;
	.submit{
		width:540upx;
		height:200upx;
		background:rgba(255,255,255,1);
		border-radius:8upx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		view{
			width: 92%;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			margin: 0 auto;
		}
		view:last-child{
			font-size:30upx;
			color:rgba(93,157,222,1);
			border-top:1px solid rgba(237,239,243,1);
		}
	}
}
>>>body{
	overflow:hidden !important;
}
.borderRed{
	border:2upx solid rgba(243, 77, 97, 0);
	box-shadow:0px 14upx 13upx 0px rgba(125,182,214,0.2);
	animation:boderAnimation 3s linear forwards;
}
@keyframes  boderAnimation{
	0{border:2upx solid	rgba(243, 77, 97, 0.2);}
	30%{border:2upx solid	rgba(243, 77, 97, 0.6);}
	60%{border:2upx solid	rgba(243, 77, 97, 0.2);}
	100%{border:2upx solid	rgba(243, 77, 97, 1);}
}
.buttons{
	margin-top: 60upx;
	width:702upx;
	height:88upx;
	background:rgba(90,170,246,1);
	box-shadow:0px 14upx 13upx 0px rgba(180,189,102,0.2);
	border-radius:44upx;
	color: #FFFFFF;
	font-size:32upx;
}
.footer{
	background: url(../static/bottombg.png) no-repeat;
	background-size: 100%;
	width: 750upx;
	height: 936upx;
	overflow: hidden;
	.footer_list{
		width: 600upx;
		margin: 0 auto;
		margin-top: 500upx;
		.radio-group{
			>view{
				padding: 10upx;
				label{
					font-size:34upx;
				}
			}
		}
	}
}
.checkbox-group{
	display: flex;
	justify-content: center;
	padding: 16upx 0;
	view,.uni-label-pointer{
		width: 25% !important;
		text-align: center;
		margin: 0 auto;
	}
	.uni-label-pointer{
		display: flex;
		justify-content: center;
	}
}
.time_list{
	display: flex;
	justify-content: center;
	view{
		padding: 16upx 0;
		width: 25%;
		text-align: center;
	}
}
.inputs1{
	>view{
		padding: 10upx 0 ;
	}
	view:first-child{
		margin-right: 6upx;
	}
	view:first-child view:nth-of-type(1){
		color: red;
	}
	view:nth-of-type(2) view:nth-of-type(1){
		color: red;
	}
	input{
		border-bottom: 1upx solid #87949A;
		margin-left: 20upx;
		width: 480upx;
	}
}
.question{
	width:702upx;
	background:rgba(255,255,255,1);
	box-shadow:0px 14upx 13upx 0px rgba(125,182,214,0.2);
	border-radius:10upx;
	margin: 32upx auto;
	display: flex;
	justify-content: center;
	.container{
		width: 100%;
		margin: 20upx;
		font-size:36upx;
		.radio-group{
			>view{
				padding: 16upx 0;
			}
			>view:first-child{
				margin-top: 20upx;
			}
			label{
				font-size: 34upx;
				input{
					margin-left: 20upx;
					border-bottom: 1upx solid #87949A;
					width: 500upx;
				}
			}
		}
		.inputs{
			view{
				font-size:34upx;
				
			}
			>view{
				padding: 10upx 0 ;
			}
			input{
				border-bottom: 1upx solid #87949A;
				margin-left: 20upx;
				width: 100%;
			}
		}
		.title1 {
			view:nth-of-type(2){
				padding-left: 0upx !important;
				height: 52upx;
				font-size:30upx !important;
				padding-right: 10upx;
				line-height: 52upx;
			}
		}
		.title{
			font-size: 36upx;
			font-weight: bold;
			padding: 10upx 0;
			display: flex;
			view:nth-of-type(2){
				background: url('../static/craw.png') no-repeat;
				background-size: 100%;
				width: 44upx;
				height: 52upx;
				font-style: italic;
				margin-left: 6upx;
				padding-left: 8upx;
				font-weight: bold;
				
				font-size: 32upx;
			}
			view:nth-of-type(1){
				color: red;
			}
			view:nth-of-type(3){
				max-width: 600upx;
				margin-left: 10upx;
			}
		}
	}
}
.list{
	margin-top: 1006upx;
}
.content{
	width: 100%;
	background: url(../static/bg.png);
	background-size: 100%;
	overflow: hidden;
}
.head{
	width: 750upx;
	background: url(../static/headbg.png) no-repeat;
	background-size: 100%;
	overflow: hidden;
}
</style>
