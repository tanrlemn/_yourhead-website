export function parseMembership(membership, benefitsText) {
  const title = membership.title;
  const subtitle = membership.subtitle;
  const monthlyPrice = membership.monthly_price;
  const yearlyPrice = membership.yearly_price;
  const backgroundColor = membership.background_color;
  const description = membership.description;
  const benefits = membership.benefits[0];
  const podcast = benefits.podcast;
  const vlog = benefits.vlog;
  const thoughtStream = benefits.thought_stream;
  const monthlyDownload = benefits.monthly_download;
  const exclusiveAccess = benefits.exclusive_access;
  const freePrint = benefits.free_print;
  const qaAccess = benefits.qa_access;
  const groupCoaching = benefits.group_coaching;
  const biMonthlyWorkshop = benefits.bi_monthly_workshop;
  const enterprise = benefits.enterprise;
  const discounts = benefits.discounts;
  const tenPercent = discounts.ten_percent;
  const limitedDiscount = discounts.limited_discount;
  const unlimitedUse = discounts.unlimited_use;
  const limitedUses = discounts.limited_uses;
  const commissionDiscount = discounts.commission_discount;
  const checks = () => {
    const checksArr = [];
    checksArr.unshift(
      'Stream released music',
      'Engage with Painting Real People',
      'Request to be a Painting Real People participant',
      'Receive updates about art & music'
    );
    if (podcast) {
      const str = benefitsText.find(
        (item) => item.benefit == 'podcast'
      ).item_text;
      checksArr.unshift(str);
    }
    if (vlog) {
      const str = benefitsText.find((item) => item.benefit == 'vlog').item_text;
      checksArr.unshift(str);
    }
    if (thoughtStream) {
      const str = benefitsText.find(
        (item) => item.benefit == 'thought_stream'
      ).item_text;
      checksArr.unshift(str);
    }
    if (monthlyDownload) {
      const str = benefitsText.find(
        (item) => item.benefit == 'monthly_download'
      ).item_text;
      checksArr.unshift(str);
    }

    if (tenPercent && !unlimitedUse) {
      const str = benefitsText.find(
        (item) => item.benefit == 'ten_percent'
      ).item_text;
      checksArr.unshift(str);
    }

    if (exclusiveAccess) {
      const str = benefitsText.find(
        (item) => item.benefit == 'exclusive_access'
      ).item_text;
      checksArr.unshift(str);
    }

    if (freePrint) {
      const str = benefitsText.find(
        (item) => item.benefit == 'free_print'
      ).item_text;
      checksArr.unshift(str);
    }

    if (qaAccess) {
      const str = benefitsText.find(
        (item) => item.benefit == 'qa_access'
      ).item_text;
      checksArr.unshift(str);
    }

    if (limitedDiscount > 0) {
      const uses = unlimitedUse ? 'unlimited uses' : `${limitedUses} uses`;
      checksArr.unshift(`${limitedDiscount}% off of everything else – ${uses}`);
    }

    if (commissionDiscount > 0) {
      checksArr.unshift(`${commissionDiscount}% off of commissioned originals`);
    }

    if (groupCoaching) {
      const str = benefitsText.find(
        (item) => item.benefit == 'group_coaching'
      ).item_text;
      checksArr.unshift(str);
    }

    if (biMonthlyWorkshop) {
      const str = benefitsText.find(
        (item) => item.benefit == 'bi_monthly_workshop'
      ).item_text;
      checksArr.unshift(str);
    }

    if (enterprise) {
      const str = benefitsText.find(
        (item) => item.benefit == 'enterprise'
      ).item_text;
      checksArr.unshift(str);
    }
    return checksArr;
  };

  return {
    title: title,
    subtitle: subtitle,
    monthlyPrice: monthlyPrice,
    yearlyPrice: yearlyPrice,
    backgroundColor: backgroundColor,
    description: description,
    podcast: podcast,
    vlog: vlog,
    thoughtStream: thoughtStream,
    monthlyDownload: monthlyDownload,
    exclusiveAccess: exclusiveAccess,
    freePrint: freePrint,
    qaAccess: qaAccess,
    groupCoaching: groupCoaching,
    biMonthlyWorkshop: biMonthlyWorkshop,
    enterprise: enterprise,
    tenPercent: tenPercent,
    limitedDiscount: limitedDiscount,
    unlimitedUse: unlimitedUse,
    limitedUses: limitedUses,
    commissionDiscount: commissionDiscount,
    checks: checks(),
  };
}
