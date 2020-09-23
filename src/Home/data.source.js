import React from 'react';
// const host = '192.168.0.145:8080';
export const host = 'http://localhost:8080/umi_demo3';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: host+'/public/img/logo/logo.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      // {
      //   name: 'item0',
      //   className: 'header0-item',
      //   children: {
      //     href: '#',
      //     children: [{ children: '导航一', name: 'text' }],
      //   },
      //   subItem: [
      //     {
      //       name: 'sub0',
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image',
      //             children:
      //               'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
      //           },
      //           {
      //             name: 'title',
      //             className: 'item-title',
      //             children: 'Ant Design',
      //           },
      //           {
      //             name: 'content',
      //             className: 'item-content',
      //             children: '企业级 UI 设计体系',
      //           },
      //         ],
      //       },
      //     },
      //     {
      //       name: 'sub1',
      //       className: 'item-sub',
      //       children: {
      //         className: 'item-sub-item',
      //         children: [
      //           {
      //             name: 'image0',
      //             className: 'item-image',
      //             children:
      //               'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
      //           },
      //           {
      //             name: 'title',
      //             className: 'item-title',
      //             children: 'Ant Design',
      //           },
      //           {
      //             name: 'content',
      //             className: 'item-content',
      //             children: '企业级 UI 设计体系',
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // },
      // {
      //   name: 'item1',
      //   className: 'header0-item',
      //   children: {
      //     href: '#',
      //     children: [{ children: '导航二', name: 'text' }],
      //   },
      // },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: 'http://ht.huageya.com/',
          children: [{ children: '登录', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: 'http://ht.huageya.com/',
          children: [{ children: '注册', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children: (
            <span>
              <p></p>
              <p></p>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <p>
                <br />
              </p>
            </span>
          ),
        },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: (
            <span>
              <p>提升工作效率</p>
              <p>提升用户体验</p>
              <p>预防操作风险</p>
              <p>节省成本</p>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <span>
                <p>
                  <br />
                </p>
              </span>
            </span>
          ),
        },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: (
            <span>
              <p>高效省时 工作简化</p>
              <p>简单易用 签约便捷</p>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <p>
                <br />
              </p>
            </span>
          ),
        },
      },
      {
        name: 'elem~kf5121x1gz',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: (
            <span>
              <span>
                <p>
                  安全便捷 管家式<br />
                </p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <span>
                <span>
                  <p>
                    电子合同签章服务<br />
                  </p>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: 'elem~kf512ov9fcg',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          电子合同<br />
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>
                      来一起 "画个押"<br />
                    </p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
      },
    ],
    autoPlaySpeed: 3000,
    duration: 1000,
    sync: false,
    initShow: 0,
    type: ['across'],
    autoPlay: true,
    className: 'kf50q2uuk2-editor_css',
  },
};
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>优势</p>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>.................</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>中华人民共和国电子签名法</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  《中华人民共和国电子签名法》已由中华人民共和国第十届全国人民代表大会常务委员会第十一次会议于２００４年８月２８日通过，现予公布，自２００５年４月１日起施行。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>电子认证</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    画个押平台依托于第三方电子认证机构，以数字证书为核心的加密技术，以PKI为技术基础，来为用户提供全流程的认证服务。
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>司法鉴定</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  为用户提供第三方电子合同验真服务，并通过司法鉴定机构提供权威的司法鉴定报告。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>时效强，成本低，上手快，保安全</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>CA认证，管家式1v1服务，历史签约随意查</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50h4bm73',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>节约成本 降低75%运营费用</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>一份传统纸质合同成本平均需要25元 </p>
                  <p>采用电子合同成本不到5元</p>
                  <p>降低75%的运营费用 </p>
                  <p>一家年签署10万份合同的公司</p>
                  <p>一年可以节省200万的费用 </p>
                  <p>最少节省2名的运营人员</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50h741fut',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>提高200%-500%的工作效率</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>传统纸质合同正常签署需要2-5天</p>
                  <p>使用电子合同1分钟就能搞定</p>
                  <p>算上双方的认证时间</p>
                  <p>一天之内肯定也能轻松完成</p>
                  <p>提高了200-500%的合同签署效率</p>
                  <p>大大节约了时间成本</p>
                  <p>提高了工作效率</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50h8ddmk',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>提高档案管理效率</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>通过电子合同目前的成熟技术</p>
                  <p>可以在线完成文档检索 调用 </p>
                  <p>轻轻点击鼠标 咻的一声就能立刻调用所需档案</p>
                  <p>
                    随着安全技术及认证技术的进一步成熟
                    电子合同如今变得更便捷易用
                  </p>
                  <p>用手机也能随时随地签署合同 随时查看管理</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50h9mhx56',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>合同管理更轻松</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>以一个汉字占用2个字节来计算</p>
                  <p>1M的虚拟容量可以容纳52万个字</p>
                  <p>如果以A4纸的最大容量计算 要装满1M汉字</p>
                  <p>至少要650张A4纸</p>
                  <p>更关键的是</p>
                  <p>存储在虚拟空间</p>
                  <p>完全不用担心什么蚊虫叮咬</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50hae16jf',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>电子签章更便捷</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>传统纸质合同异地签署需要来回邮寄 过程繁琐</p>
                  <p>电子合同直接规避了邮寄过程 直接在线签署。</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50k0cwavq',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>管家式落地服务</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>随约随到上门布置 手把手点对点辅导</p>
                    <p>专业团队制定模板 条款 多选项 附件 图片无限制随意设计</p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50k1c4unm',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>客户直接发送签约信息给管家</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      管家直接打理后续服务 方便安全又省心<br />
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~kf50k2063q',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>同时支持合同一式多份</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>多人签署，多章签署，多方签署</p>
                    <p>只有想不到</p>
                    <p>没有做不到</p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>合作方</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '在这里用一段话介绍服务的案例情况',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      // {
      //   name: 'block0',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG72.png',
      //     },
      //     content: { children: 'CTS' },
      //   },
      // },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/WechatIMG68.png',
          },
          content: { children: '北京青年旅行社' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/zhongxin.png',
          },
          content: { children: '众信旅游' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/WechatIMG76.png',
          },
          content: { children: '神州国旅' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/WechatIMG77.png',
          },
          content: { children: '蝙蝠超跑' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/shanlv.jpeg',
          },
          content: { children: '陕旅集团' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/WechatIMG79.png',
          },
          content: { children: '招商国旅' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/fanghua.jpg',
          },
          content: { children: '芳华教育' },
        },
      },
      // {
      //   name: 'block8',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: 'WEIZHI' },
      //   },
      // },
      {
        name: 'block27',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/zsgv.jpeg',
          },
          content: { children: '中商国旅' },
        },
      },
      {
        name: 'block9',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/zlv.jpeg',
          },
          content: { children: '中旅' },
        },
      },
      {
        name: 'block10',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/yjiay.png',
          },
          content: { children: '医加壹' },
        },
      },
      {
        name: 'block11',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/ydgj.png',
          },
          content: { children: '邮电国际旅行社' },
        },
      },
      // {
      //   name: 'block12',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '华悦国际' },
      //   },
      // },
      // {
      //   name: 'block13',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '万众旅游' },
      //   },
      // },
      {
        name: 'block14',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/hjguolv.jpeg',
          },
          content: { children: '环境国旅' },
        },
      },
      // {
      //   name: 'block15',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '弘赫国际教育' },
      //   },
      // },
      {
        name: 'block16',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/lctx.jpg',
          },
          content: { children: '旅程同行' },
        },
      },
      // {
      //   name: 'block17',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '钓鱼网' },
      //   },
      // },
      {
        name: 'block18',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/rzw.png',
          },
          content: { children: '融众网' },
        },
      },
      // {
      //   name: 'block19',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '广州少年宫' },
      //   },
      // },
      {
        name: 'block20',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/zckj.jpg',
          },
          content: { children: '众创空间' },
        },
      },
      // {
      //   name: 'block21',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '世纪国旅' },
      //   },
      // },
      // {
      //   name: 'block22',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '十福' },
      //   },
      // },
      {
        name: 'block23',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              host+'/public/img/joined_logo/aqw.jpg',
          },
          content: { children: '爱情青蛙' },
        },
      },
      // {
      //   name: 'block24',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '未知' },
      //   },
      // },
      // {
      //   name: 'block25',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '未知' },
      //   },
      // },
      // {
      //   name: 'block26',
      //   className: 'block',
      //   md: 6,
      //   xs: 24,
      //   children: {
      //     wrapper: { className: 'content5-block-content' },
      //     img: {
      //       children:
      //         host+'/public/img/joined_logo/WechatIMG68.png',
      //     },
      //     content: { children: '未知' },
      //   },
      // },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://gaode.com/place/B0FFH3KPBX', name: '跳转地址' },
      title: { children: '公司地址', name: '弹框标题' },
      content: {
        children: '潘家园大厦',
        name: '弹框内容',
      },
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            host+'/public/img/logo/logo.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '画个押',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '画个押' },
            { name: 'link1', href: '#', children: '小程序' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '联系方式' },
        childWrapper: {
          children: [
            { name: 'text', children: '电话: 185-0002-9605' },
            { name: 'text', children: '邮箱: 1069470787@qq.com' },
          ],
        },
      },
      // {
      //   name: 'block3',
      //   xs: 24,
      //   md: 6,
      //   className: 'block',
      //   title: { children: '资源' },
      //   childWrapper: {
      //     children: [
      //       { href: '#', name: 'link0', children: '11111' },
      //       { href: '#', name: 'link1', children: '22222' },
      //     ],
      //   },
      // },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        {/* ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved */}
      </span>
    ),
  },
};
