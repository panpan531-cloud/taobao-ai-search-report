const queryData = {
  exact: {
    title: "精确商品 / 已知目标",
    copy: "搜商品标题片段、品牌型号、订单同款或截图同款。AI 的价值在于把模糊记忆恢复成候选集合，并合并重复 SKU。",
    examples: ["商品标题片段", "品牌+型号", "订单同款", "截图同款"]
  },
  category: {
    title: "泛类目 / 浏览式需求",
    copy: "用户知道大类但没有明确商品。AI 应先帮助收窄预算、风格、场景和不可接受条件，再进入排序。",
    examples: ["通勤包", "夏天防晒衣", "入门咖啡机", "儿童书桌"]
  },
  attribute: {
    title: "属性约束 / 自然语言筛选",
    copy: "传统筛选器很难表达“小个子显高”“不闷汗”“无涂层”等自然语言约束，这是 AI 导购的高价值入口。",
    examples: ["小个子显高", "油皮持妆", "无涂层", "猫抓布"]
  },
  occasion: {
    title: "场景方案 / 任务型购买",
    copy: "用户买的是一个结果，比如搬家、露营、送礼、通勤。AI 可以把任务拆成清单，再推荐可替换组合。",
    examples: ["搬家礼物", "露营收纳", "开学宿舍", "新手养猫"]
  },
  comparison: {
    title: "对比决策 / 买前判断",
    copy: "用户需要判断值不值得买。AI 应综合价格、评价、店铺、履约、历史低价和替代品，给出可解释推荐。",
    examples: ["A和B哪个好", "平替", "618何时买", "同价位对比"]
  },
  service: {
    title: "订单 / 售后 / 本地服务",
    copy: "搜索可以连接个人交易上下文：我买过的同款、能不能退换、附近可配送、是否有运费险。",
    examples: ["我买过的同款", "运费险", "附近可配送", "退换规则"]
  },
  content: {
    title: "内容种草 / 跨平台同款",
    copy: "小红书、直播、短视频、明星穿搭等内容触发购买意图。AI 需要把视觉和语义线索落到淘宝商品。",
    examples: ["博主同款", "小红书截图", "直播间同款", "明星穿搭"]
  }
};

const frictionData = {
  relevance: {
    title: "相关性不是单纯排序问题",
    copy: "当搜索结果混入推荐和商业化信号，用户会怀疑入口中立性。AI 搜需要先识别任务搜索，再把推荐信号降权或解释化。"
  },
  duplicate: {
    title: "同质化会吞掉淘宝的供给优势",
    copy: "SKU 足够多本是优势，但相似图、相似标题和相似价格会让用户疲劳。AI 应聚类相似款并突出材质、版型、店铺和售后差异。"
  },
  price: {
    title: "价格问题本质是规则计算",
    copy: "用户真正关心到手价、是否低价、券能否叠加、运费和退换成本。AI 导购可以把复杂规则变成一句可信结论。"
  },
  context: {
    title: "上下文缺失让精确搜索变成猜谜",
    copy: "截图、历史浏览、旧订单、博主内容和口语描述都可能是线索。AI 搜需要多模态和个人上下文共同召回。"
  }
};

const scenarioData = {
  recover: {
    title: "模糊同款恢复",
    need: "用户记得样子、场景或曾经看过，但不记得完整商品标题。",
    ai: "结合图片搜索、标题记忆、浏览轨迹、订单历史和风格向量，重建候选集。",
    surface: "AI 搜 tab + 搜索框建议 + 结果页候选聚类。",
    metric: "同款找回率、搜索后加购率、二跳筛选减少率。",
    query: "我上周看过一条小个子通勤裤，黑色直筒，想找同款或更便宜的。",
    intent: "已合并浏览记录、图片相似款、版型约束和价格区间，优先展示可退换且尺码评价稳定的候选。"
  },
  constraint: {
    title: "约束式服饰导购",
    need: "用户知道风格和限制，但无法把体型、材质、预算、通勤场景完整翻译成筛选器。",
    ai: "追问 1-2 个关键约束，抽取版型、面料、适用身高、评价风险，再生成候选对比。",
    surface: "搜索结果页 AI 筛选条 + 对比抽屉。",
    metric: "筛选成功率、商品对比使用率、服饰退货率。",
    query: "通勤裤，小个子显高，夏天不闷，预算 150 以内。",
    intent: "已识别身高、季节、版型和预算限制，正在过滤厚面料、低腰和退货风险高的商品。"
  },
  deal: {
    title: "到手价真相计算",
    need: "用户不想自己算券、满减、会员权益、历史价和跨店活动。",
    ai: "计算最终到手价，解释优惠来源，提示等待或替代购买方案，并展示证据。",
    surface: "商品列表价签 + 活动页 AI 导购卡。",
    metric: "优惠采纳率、支付转化、价格相关客服咨询下降。",
    query: "这台咖啡机 618 现在买划算吗？有没有同价位更稳的？",
    intent: "已计算店铺券、跨店满减、会员权益和历史价，当前到手价低于近 90 天中位价。"
  },
  bundle: {
    title: "任务型清单购物",
    need: "用户要完成一件事，而不是买单个商品。",
    ai: "把任务拆成可编辑清单，推荐核心品、替代品和可暂缓项，支持一键合并结算。",
    surface: "对话式导购 + 清单购物车。",
    metric: "多件购买率、清单完成率、跨类目 GMV。",
    query: "第一次露营，两个人，预算 800，哪些东西必须买？",
    intent: "已拆成睡眠、照明、收纳、烹饪和安全五组，优先推荐可复用且评价稳定的套装。"
  },
  risk: {
    title: "评价风险摘要",
    need: "用户不只想看卖点，更想知道踩坑点和是否适合自己。",
    ai: "按场景总结评价，抽取尺码、气味、做工、售后、物流等风险，并给出适合/不适合人群。",
    surface: "商品详情页 AI 评价摘要。",
    metric: "评价摘要展开率、售后率、退货率、差评风险命中。",
    query: "这款沙发猫抓布靠谱吗？家里两只猫会不会很快坏？",
    intent: "已汇总养宠家庭评价，重点提示耐抓程度、清洁难度、坐垫塌陷和售后响应。"
  }
};

const typingSamples = [
  "小个子通勤裤 夏天不闷 150以内",
  "截图里的同款杯子 找便宜一点",
  "第一次露营 两个人 必买清单",
  "这款咖啡机 618 现在买划算吗"
];

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initTyping() {
  const target = qs("[data-typing]");
  if (!target) return;

  let sampleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const text = typingSamples[sampleIndex];
    target.textContent = text.slice(0, charIndex);

    if (!deleting && charIndex < text.length) {
      charIndex += 1;
      window.setTimeout(tick, 54);
      return;
    }

    if (!deleting && charIndex === text.length) {
      deleting = true;
      window.setTimeout(tick, 1250);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(tick, 26);
      return;
    }

    deleting = false;
    sampleIndex = (sampleIndex + 1) % typingSamples.length;
    window.setTimeout(tick, 320);
  };

  tick();
}

function initSentimentTabs() {
  qsa(".sentiment-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.sentiment;
      qsa(".sentiment-tab").forEach((item) => item.classList.toggle("active", item === button));
      qsa(".sentiment-list").forEach((list) => {
        list.classList.toggle("active", list.dataset.sentimentList === key);
      });
    });
  });
}

function initFrictionMap() {
  const detail = qs("[data-friction-detail]");
  if (!detail) return;

  qsa(".friction-dot").forEach((button) => {
    button.addEventListener("click", () => {
      const item = frictionData[button.dataset.friction];
      if (!item) return;
      qsa(".friction-dot").forEach((dot) => dot.classList.toggle("active", dot === button));
      detail.innerHTML = `<strong>${item.title}</strong><p>${item.copy}</p>`;
      if (window.gsap) {
        gsap.fromTo(detail, { y: 8, opacity: 0.35 }, { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" });
      }
    });
  });
}

function initQueryExplorer() {
  const title = qs("[data-query-title]");
  const copy = qs("[data-query-copy]");
  const examples = qs("[data-query-examples]");
  if (!title || !copy || !examples) return;

  qsa(".query-row").forEach((button) => {
    button.addEventListener("click", () => {
      const item = queryData[button.dataset.query];
      if (!item) return;
      qsa(".query-row").forEach((row) => row.classList.toggle("active", row === button));
      title.textContent = item.title;
      copy.textContent = item.copy;
      examples.innerHTML = item.examples.map((example) => `<span>${example}</span>`).join("");
      if (window.gsap) {
        gsap.fromTo(".query-detail > *", { x: 12, opacity: 0.3 }, { x: 0, opacity: 1, stagger: 0.04, duration: 0.32, ease: "power3.out" });
      }
    });
  });
}

function initScenarioExplorer() {
  const fields = {
    title: qs("[data-scenario-title]"),
    need: qs("[data-scenario-need]"),
    ai: qs("[data-scenario-ai]"),
    surface: qs("[data-scenario-surface]"),
    metric: qs("[data-scenario-metric]"),
    query: qs("[data-phone-query]"),
    intent: qs("[data-phone-intent]")
  };

  if (Object.values(fields).some((field) => !field)) return;

  qsa(".scenario-item").forEach((button) => {
    button.addEventListener("click", () => {
      const item = scenarioData[button.dataset.scenario];
      if (!item) return;
      qsa(".scenario-item").forEach((row) => row.classList.toggle("active", row === button));
      fields.title.textContent = item.title;
      fields.need.textContent = item.need;
      fields.ai.textContent = item.ai;
      fields.surface.textContent = item.surface;
      fields.metric.textContent = item.metric;
      fields.query.textContent = item.query;
      fields.intent.textContent = item.intent;
      if (window.gsap) {
        gsap.fromTo(".phone-mock .chat-card, .phone-mock .product-strip, .scenario-detail > *", { y: 12, opacity: 0.25 }, { y: 0, opacity: 1, stagger: 0.045, duration: 0.35, ease: "expo.out" });
      }
    });
  });
}

function initMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  qsa("[data-reveal]").forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.72,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
        once: true
      }
    });
  });

  gsap.to(".hero-grid", {
    yPercent: 3,
    xPercent: -1,
    duration: 9,
    ease: "sine.inOut",
    repeat: 18,
    yoyo: true
  });

  gsap.to(".pulse-dot", {
    scale: 1.18,
    duration: 1.15,
    ease: "sine.inOut",
    repeat: 80,
    yoyo: true
  });

  gsap.to(".radial-seg", {
    strokeDashoffset: (index) => {
      const values = [428, 451, 474, 503, 526, 538, 549];
      return values[index] || 520;
    },
    duration: 1.15,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".radial-chart",
      start: "top 74%",
      once: true
    }
  });

  gsap.to(".meter i", {
    scaleX: 1,
    duration: 0.75,
    ease: "expo.out",
    stagger: 0.055,
    scrollTrigger: {
      trigger: ".query-table",
      start: "top 76%",
      once: true
    }
  });

  gsap.from(".roadmap article", {
    y: 26,
    opacity: 0,
    duration: 0.62,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".roadmap",
      start: "top 78%",
      once: true
    }
  });

  gsap.from(".metric-card", {
    scale: 0.96,
    opacity: 0,
    duration: 0.48,
    ease: "back.out(1.3)",
    stagger: 0.07,
    scrollTrigger: {
      trigger: ".metrics-grid",
      start: "top 82%",
      once: true
    }
  });
}

function initCursor() {
  const cursor = qs(".cursor-orbit");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("pointermove", (event) => {
    cursor.style.opacity = "1";
    cursor.style.transform = `translate(${event.clientX - 9}px, ${event.clientY - 9}px)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initTyping();
  initSentimentTabs();
  initFrictionMap();
  initQueryExplorer();
  initScenarioExplorer();
  initMotion();
  initCursor();
});
