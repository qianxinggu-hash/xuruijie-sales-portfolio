import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "徐睿婕｜销售与商务拓展",
  description:
    "面向销售与商务拓展岗位的个人作品集，展示品牌合作、线下营销与内容增长能力。",
};

const ugcSamples = [
  { src: "/work/ugc-c9008d.jpg", alt: "兰格格校园活动用户笔记，103点赞，10收藏" },
  { src: "/work/ugc-aed7cf.jpg", alt: "兰格格校园活动用户笔记，79点赞，8收藏，6评论" },
  { src: "/work/ugc-91f074.jpg", alt: "兰格格校园活动用户笔记，156点赞，11收藏，3评论" },
  { src: "/work/ugc-7a7ef7.jpg", alt: "兰格格校园活动用户笔记，126点赞，5收藏，1评论" },
];

const contentLinks = [
  { label: "宝马 M Festival 预热内容", href: "https://xhslink.cn/o/7KyocEvp3Gg" },
  { label: "零食有鸣产品种草", href: "https://xhslink.cn/o/2fnlBLZopx1" },
  { label: "中卫 66 号公路攻略", href: "https://xhslink.cn/o/2trKJoCNWlN" },
  { label: "新年视觉内容", href: "https://xhslink.cn/o/24Cc2rEyGIb" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">徐睿婕</a>
        <div className="nav-links">
          <a href="#proof">成果</a>
          <a href="#cases">案例</a>
          <a href="#content">内容</a>
        </div>
        <a className="nav-cta" href="mailto:389019026@qq.com">面试交流</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy reveal reveal-1">
          <p className="eyebrow">销售 / 商务拓展</p>
          <h1>我让合作<br />真正发生。</h1>
          <p className="hero-lede">
            从需求识别、商务推进到活动落地和内容传播，完整推进销售链路。
          </p>
          <a className="primary-button" href="#cases">查看代表案例</a>
        </div>
        <figure className="hero-media reveal reveal-2">
          <img
            src="/work/hero-event.jpg"
            alt="兰格格草原酸奶节校园活动现场，学生正在参与品牌互动"
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>品牌线下活动现场</figcaption>
        </figure>
      </section>

      <section className="proof" id="proof" aria-label="代表成果">
        <div className="proof-item">
          <strong>7</strong>
          <span>个品牌项目</span>
        </div>
        <div className="proof-item">
          <strong>1万</strong>
          <span>小红书粉丝</span>
        </div>
        <div className="proof-item">
          <strong>1.6万</strong>
          <span>获赞与收藏</span>
        </div>
        <div className="proof-item">
          <strong>464</strong>
          <span>活动 UGC 样本点赞</span>
        </div>
      </section>

      <section className="capabilities section-shell">
        <div className="section-heading">
          <h2>销售能力，不止在谈判桌上</h2>
          <p>我把销售理解为一条连续链路：找到机会，组织资源，让客户看见结果。</p>
        </div>
        <div className="capability-grid">
          <article className="capability-main">
            <div className="capability-topline">
              <span className="capability-index">核心能力</span>
              <div className="capability-main-metric">
                <strong>7</strong>
                <span>个品牌项目</span>
              </div>
            </div>
            <h3>商业拓展</h3>
            <p>识别合作切口，理解客户目标，组织内部与外部资源，把模糊需求推进成可执行项目。</p>
            <div className="process" aria-label="商务推进流程">
              <span>需求拆解</span>
              <span>方案匹配</span>
              <span>关系推进</span>
              <span>复盘沉淀</span>
            </div>
          </article>
          <article className="capability-side capability-activation">
            <div className="capability-side-metrics" aria-label="活动主理成果">
              <div><strong>3 类</strong><span>现场互动玩法</span></div>
              <div><strong>4 篇</strong><span>活动 UGC 样本</span></div>
            </div>
            <h3>活动主理</h3>
            <p>从校园场景、互动玩法到现场节奏，让品牌主张被真实体验。</p>
          </article>
          <article className="capability-side capability-content">
            <div className="capability-side-metrics" aria-label="内容账号成果">
              <div><strong>1万</strong><span>小红书粉丝</span></div>
              <div><strong>1.6万</strong><span>获赞与收藏</span></div>
            </div>
            <h3>内容转化</h3>
            <p>用平台语言表达产品卖点，让线下体验继续在线上扩散。</p>
          </article>
        </div>
      </section>

      <section className="case case-yogurt" id="cases">
        <div className="case-intro section-shell">
          <p className="eyebrow">代表案例</p>
          <h2>兰格格草原酸奶节</h2>
          <p>把一次校园赞助，做成可参与、可分享、可继续传播的品牌体验。</p>
        </div>
        <div className="case-visual section-shell">
          <figure className="case-photo case-photo-main">
            <img src="/work/hero-event.jpg" alt="兰格格草原酸奶节校园活动现场全景" loading="lazy" />
            <figcaption>兰格格草原酸奶节活动现场</figcaption>
          </figure>
          <div className="case-photo-stack">
            <figure className="case-photo">
              <img src="/work/langgege-product.jpg" alt="兰格格草原酸奶节品牌主题与产品展示" loading="lazy" />
              <figcaption>品牌主题与产品露出</figcaption>
            </figure>
            <figure className="case-photo case-photo-ugc">
              <img src="/work/ugc-91f074.jpg" alt="兰格格校园活动小红书用户笔记样本" loading="lazy" />
              <figcaption>现场体验形成用户内容</figcaption>
            </figure>
          </div>
          <div className="case-notes">
            <div>
              <span>场景</span>
              <strong>郑州大学校运会</strong>
            </div>
            <div>
              <span>互动</span>
              <strong>套圈、保龄球、试饮</strong>
            </div>
            <div>
              <span>传播</span>
              <strong>现场体验转化为 UGC</strong>
            </div>
          </div>
        </div>
        <div className="ugc-summary section-shell">
          <div className="ugc-copy">
            <h3>用户愿意主动分享，活动才真正完成闭环。</h3>
            <p>4 篇留存样本笔记共获得 464 点赞、34 收藏和 10 条评论。</p>
          </div>
          <div className="ugc-track" aria-label="校园活动用户内容样本">
            {ugcSamples.map((sample) => (
              <img key={sample.src} src={sample.src} alt={sample.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="case-thinkpad section-shell">
        <div className="thinkpad-media">
          <img className="thinkpad-main" src="/work/thinkpad-conversation.jpg" alt="ThinkPad 与 Intel 校园活动现场沟通" loading="lazy" />
          <img className="thinkpad-detail" src="/work/thinkpad-station.jpg" alt="ThinkPad AI 灵感代码站产品体验区" loading="lazy" />
        </div>
        <div className="thinkpad-copy">
          <h2>ThinkPad × Intel × 京东校园</h2>
          <p className="case-lede">让复杂的 AI 产品卖点，变成学生愿意停留、体验和讨论的现场语言。</p>
          <dl>
            <div><dt>品牌命题</dt><dd>AI PC 校园认知与产品体验</dd></div>
            <div><dt>现场设计</dt><dd>产品演示、互动任务、销售承接</dd></div>
            <div><dt>销售价值</dt><dd>把品牌曝光推进到真实产品对话</dd></div>
          </dl>
        </div>
      </section>

      <section className="project-gallery section-shell">
        <div className="section-heading compact">
          <h2>跨品类项目经验</h2>
          <p>科技、食品、即时零售、消费护理，面对不同产品，我会先找到适合它的销售场景。</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-wide">
            <img src="/work/meituan-campus.jpg" alt="美团外卖校园营销活动" loading="lazy" />
            <figcaption>美团外卖 / 校园场景</figcaption>
          </figure>
          <figure>
            <img src="/work/jinmailang-campus.jpg" alt="今麦郎校园营销活动" loading="lazy" />
            <figcaption>今麦郎 / 产品试吃</figcaption>
          </figure>
          <figure>
            <img src="/work/tutucare-campus.jpg" alt="凸凸棉校园品牌体验空间" loading="lazy" />
            <figcaption>凸凸棉 / 沉浸体验</figcaption>
          </figure>
        </div>
      </section>

      <section className="creator" id="content">
        <div className="creator-shell section-shell">
          <div className="creator-copy">
            <p className="eyebrow">以内容助力销售</p>
            <h2>我也站在消费者这一边</h2>
            <p>小红书账号“芒芒蛋黄酥”覆盖留学、旅行、消费体验与品牌种草。平台经验让我更快理解用户为什么停留、信任和行动。</p>
            <div className="creator-metrics">
              <div><strong>1万</strong><span>粉丝</span></div>
              <div><strong>1.6万</strong><span>获赞与收藏</span></div>
              <div><strong>819</strong><span>单篇互动样本</span></div>
            </div>
          </div>
          <div className="analytics-stack">
            <img src="/work/xhs-analytics.jpg" alt="小红书单篇笔记数据，曝光12846，观看6554" loading="lazy" />
            <img src="/work/xhs-diagnostic.jpg" alt="小红书笔记诊断，互动量819，内容丰富度超过99%同类创作者" loading="lazy" />
          </div>
        </div>
        <div className="content-links section-shell">
          {contentLinks.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="fit section-shell">
        <div className="fit-copy">
          <h2>我适合这样的销售岗位</h2>
          <p>需要主动开拓、跨团队推进、理解年轻消费者，并且愿意对最终落地负责。</p>
        </div>
        <div className="role-list">
          <span>品牌商务</span>
          <span>渠道销售</span>
          <span>大客户销售</span>
          <span>整合营销商务拓展</span>
        </div>
      </section>

      <footer>
        <div>
          <span className="footer-mark">徐睿婕</span>
          <h2>期待一次有结果的交流。</h2>
        </div>
        <a className="primary-button" href="mailto:389019026@qq.com">联系面试</a>
        <p>389019026@qq.com</p>
      </footer>
    </main>
  );
}
