我们分析了不变扩展卡尔曼滤波器（IEKF）在李群上作为确定性非线性观测器时的收敛性问题，用于连续时间系统和离散观测。在李群上针对左不变系统的不变观测器的主要特点之一是估计误差是自治的。在本文中，我们首先通过表征具有此属性的系统的（更广泛的）类来推广这个结果。对于这些系统，误差的李对数满足线性微分方程。然后，我们利用误差演化的这种“对数线性”特性，在标准线性情况的条件下证明了IEKF在任何轨迹周围的局部稳定性。一个移动机器人的例子和一个惯性导航的例子说明了这种方法的价值。仿真结果表明，在某些具有挑战性的情况下，EKF可能会发散，而具有相同参数调整的IEKF仍然保持收敛。

在第三节中，我们将重点关注不变扩展卡尔曼滤波器（IEKF）[6]在第二节所介绍的广泛系统类别中的应用。我们考虑具有离散观测的连续时间模型，这最适合于导航系统，其中高速传感器控制动态的特性需要与低速传感器[14]相结合。我们稍微改变了IEKF方程，将其转化为矩阵李群框架，这比[6]中通常的抽象李群形式更加方便使用。然后，我们证明，在线性情况下[13]的标准收敛条件适用于真实状态周围的线性化模型时，IEKF是系统在任何轨迹周围的渐近观测器，这是一个难以获得的性质。通过这种方式，我们为广泛的李群系统提供了一个具有保证的局部收敛性质的通用观测器，而这种性质迄今只适用于特定的李群示例。这也为IEKF在实践中表现良好提供了坚实的理论基础，正如在一些论文中已经注意到的那样，参见例如[3]，[5]，[2]。
在第四节中，我们考虑一个移动机器人的例子，其中一个单轮车（或简化的汽车）试图通过GPS位置（仅）测量或者通过地标范围和方位角测量来估计其位置和方向。通过使用本文的结果，==IEKF被证明可以在任何轨迹周围收敛==，这本身就是一项贡献。仿真结果表明，在具有挑战性的情况下，IEKF始终优于EKF，甚至可能在某些情况下超过后者。
在第五节中，我们考虑一个高度相关的问题，即无人机（UAV）使用加速计和陀螺仪以及已知地标的范围和方位角测量进行导航。虽然该系统不符合[8]，[7]中的不变性概念，但通过我们的框架证明它适用于我们的框架，并且满足[7]中的自治误差方程性质，这是我们所知道的从未注意到的事实（除了我们的初步会议论文[4]）。通过使用本文的结果，IEKF被证明可以在任何轨迹周围收敛，这本身就是一项贡献。此外，它被证明在高精度导航中，当用户对惯性传感器的信任远远超过地标测量时，IEKF的性能优于EKF，后者甚至会发散。

主要的贡献可以总结如下：

- 对于那些关于（状态）误差方程自主性的关键结果[7]适用的系统类别进行了全面的描述，并实际证明其范围远远超出左不变系统。
- 误差方程的自主性被证明具有非常引人入胜的特性：==非线性误差的精心选择的非线性函数被证明满足线性微分方程。==
- 反过来，这个特性使得对于引入的这类系统来说，确定性上下文中使用的IEKF具有强大的局部收敛保证，而标准的EKF则缺乏这一特性。
- 两个导航的例子阐明了这些结果，并且模拟表明，IEKF始终优于EKF，并且在某些具有挑战性的情况下甚至可能超越EKF，后者甚至有可能发散。

#### 示例

对于平面运动小车，方向$\theta$，位置$x=(x^1,x^2)$，线速度$v$，角速度$\omega$，运动方程
$$
\frac{d\theta}{dt}=\omega\\ \frac{dx^1}{dt}=cos{\theta}v\\\frac{dx^2}{dt}=sin{\theta}v
$$
定义线性误差
$$
{\Delta}\theta=\theta-\hat{\theta}\\{\Delta}x=x-\hat{x}
$$
线性误差方程
$$
\frac{d{\Delta}\theta}{dt}=0\\\frac{d{\Delta}x^1}{dt}=(cos\theta-cos{\hat{\theta}})v\\
\frac{d{\Delta}x^1}{dt}=(sin\theta-sin{\hat{\theta}})v
$$
误差方程非线性，且与状态量有关

相比之下定义非线性误差
$$
\xi=\begin{bmatrix}{\Delta}\theta\\\frac{1}{2}[a{\Delta}{\theta}I_2-{\Delta}{\theta}J_2]R(-\hat{\theta}){\Delta}x\end{bmatrix}
$$
与遵循（1）的线性误差相反，选择非线性误差（2）遵循以下线性且自治的方程，尽管系统和误差都是完全非线性的。

本节提供了一个新颖的几何框架，涵盖了这个例子，用于描述在李群上具有这种特性的系统。反过来，这种特性将简化非线性观测器（即IEKF）的收敛分析，因为它与线性情况有着暗示的相似性。

#### 李群上具有误差演化独立于轨迹特性的系统

系统方程
$$
\frac{dx}{dt}=f_u(x)
$$
其中状态量$x$位于矩阵李群$G$上，定义不变误差
$$
\eta^l=x^{-1}\hat{x}\\
\eta^r=\hat{x}x^{-1}
$$
分别对左乘和右乘保持不变。

**定理1**：下列条件对于上述系统等价

* 左不变误差独立于状态轨线

* 右不变误差独立于状态轨线

* $$
  f_u(ab)=f_u(a)b+af_u(b)-af_u(I_d)b
  $$

* 

**证明：**

假设不变误差独立于状态轨线则有
$$
\frac{d\eta}{dt}=g_u(\eta)
$$
则
$$
\begin{align}g_u(\eta)&=\frac{dx^{-1}\hat{x}}{dt}=-x^{-1}\frac{dx}{dt}x^{-1}\hat{x}+x^{-1}\frac{d\hat{x}}{dt}\\
&=-x^{-1}f_u(x)x^{-1}\hat{x}+x^{-1}f(\hat{x})
\end{align}
$$
对任意$x,\eta$都成立，当$x=I_d$时，有
$$
g_u(\eta)=f_u(\eta)-f_u(I_d)\eta
$$
带回上式后得
$$
f_u(x\eta)=f_u(x)\eta+xf_u(\eta)-xf_u(I_d)\eta
$$
由任意性，证毕。

**备注：**

在特定情况下，当G是一个向量空间，其中标准加法作为群的组合法则时，条件可以简化为
$$
f_u(a+b)=f_u(a)+f_u(b)-f_u(0)
$$


我们就得到了仿射函数，即线性系统！因此，我们建议将满足条件的系统称为==群仿射系统==。