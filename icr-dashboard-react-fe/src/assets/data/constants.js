import indicator1 from "../../assets/images/Icons/indicator1.svg";
import indicator2 from "../../assets/images/Icons/indicator2.svg";
import indicator3 from "../../assets/images/Icons/indicator3.svg";
import sortIcon from "../../assets/images/Icons/sortIcon.svg";
import IndiviualIpoviewTable from "../../components/indiviualIpoView/IpoInvestorTable";
import Page1 from "../../pages/NotFoundPage";
import NotFoundPage from "../../pages/NotFoundPage";
import InvestorIPOTable from "../../components/InvestorIPOParticipation/InvestorIPOTable";

import AnalysisView from "../../components/AnalysisView/AnalaysisView";
import FinalAllocation from "../../components/FinalAllocation/WrapUp";
import IpoAnalysis from "../../components/InvestorIPOParticipation/IpoAnalysis";

export const icrOptionsData = [
  { value: "none", label: "-" },
  { value: "all", label: "All" },
  { value: "full_breakdown", label: "Full Breakdown" },
];

export const icrInvolmentBreakdowndata = [
  {
    value: "icr_capital",
    label: "ICR Capital",
  },
  {
    value: "icr_ir",
    label: "ICR IR",
  },
  {
    value: "both",
    label: "Both (Capital & IR)",
  },
  {
    value: "none",
    label: "None",
  },
];

export const icrInvolmentAllData = [
  {
    value: "all_ipos",
    label: "All IPOs",
  },
  {
    value: "all_icr_involvement",
    label: "All ICR Involvement",
  },
];

export const icrIndicatorsData = [
  {
    icon: indicator1,
    label: "ICR CAP",
  },
  {
    icon: indicator2,
    label: "ICR IR",
  },
  {
    icon: indicator3,
    label: "Both (CAP + IR)",
  },
];

export const icrUsIpoTableHeadersData = [
  {
    label: "Ticker",
    value: "ticker",
  },
  {
    label: "Company",
    value: "company",
  },
  {
    label: "Sector",
    value: "sector",
    icon: sortIcon,
  },
  {
    label: "Pricing Date",
    value: "pricingDate",
    icon: sortIcon,
  },
  {
    label: "Final Deal Size",
    value: "finalDealSize",
    icon: sortIcon,
  },
  {
    label: "Market Cap",
    value: "marketcap",
    icon: sortIcon,
  },
  {
    label: "Shares at IPO",
    value: "sharesAtIpo",
    icon: sortIcon,
  },
  {
    label: "+90 Days",
    value: "Days90Plus",
  },
  {
    label: "+180 Days",
    value: "Days180Plus",
  },
  {
    label: "+270 Days",
    value: "Days270Plus",
  },
  {
    label: "+360 Days",
    value: "Days360Plus",
  },
  {
    label: "Px Change",
    value: "id",
  },
];

export const IndiviualIpoTabsInfo = [
  {
    label: "Suggested Bank Allocations",
    value: "suggested_bank_allocation",
    subcategories: [
      {
        label: "Progression",
        value: "subcategory_1",
        component: IndiviualIpoviewTable,
      },
      {
        label: "Analysis",
        value: "subcategory_2",
        component: AnalysisView,
      },
    ],
  },
  {
    label: "Final Allocation",
    value: "final_allocation",
    component: FinalAllocation,
    subcategories: [
      {
        label: "Subcategory 1",
        value: "subcategory_1",
        component: FinalAllocation,
      },
      {
        label: "Subcategory 2",
        value: "subcategory_2",
        component: NotFoundPage,
      },
    ],
  },
  {
    label: "Events & Meetings",
    value: "events_meetings",
    subcategories: [
      {
        label: "Subcategory 1",
        value: "subcategory_1",
        component: NotFoundPage,
      },
      {
        label: "Subcategory 2",
        value: "subcategory_2",
        component: NotFoundPage,
      },
    ],
  },
];

export const icrIndiviualIpoTableHeadersData = [
  {
    label: "Investor Name",
    value: "investor_name",
  },
  {
    label: "Type",
    value: "type",
    icon: sortIcon,
  },

  {
    label: "Engagement Rating",
    value: "engagement_rating",
  },
  {
    label: "Cornerstone",
    value: "corner_stone",
    icon: sortIcon,
  },
  {
    label: "Meetings",
    value: "meetings",
    icon: sortIcon,
  },
  {
    label: "1st Draft Allocation",
    value: "draft_allocation",
    icon: sortIcon,
  },
  {
    label: "First Allocation",
    value: "first_allocation",
    icon: sortIcon,
  },
  {
    label: "% Of Allocation",
    value: "%_of_allocation",
    icon: sortIcon,
  },
  {
    label: "% of Change",
    value: "of_change",
    icon: sortIcon,
  },
];

export const icrIndiviualIpoBodyData = [
  {
    id: 1,
    ipoId: 2,
    investorDetails: {
      investorName: "Rudman Capital Management LLC",
      type: "Hedge Fund",
      turnover: "Low",
      engagementRating: 76,
      meetings: "50",
      firstDraftAllocation: "1800000",
      indication: "5000000",
      finalAllocation: "3100000",
      allocation: "1800000",
      percentOfAllocation: "8.34",
      date: "2/4/5",
      percentOfChange: "-10",
      focus: "Aggressive",
      days: "45",
      subcategories: [
        {
          investorName: "GSMA Capital LLC1 ",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "5000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC2",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "5000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC3",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "5000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "5000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
      ],
    },
  },
  {
    id: 5,
    ipoId: 2,
    investorDetails: {
      investorName: "Lone Pine Capital LLC",
      type: "Institutional Investor",
      turnover: "Medium",
      engagementRating: 11,
      meetings: "30",
      allocation: "1800000",
      firstDraftAllocation: "5200000",
      finalAllocation: "1100000",
      percentOfAllocation: "4.34",
      percentOfChange: "-60",
      days: "-15",
      date: "12/4/5",
      focus: "Aggressive",
      indication: "50000000",
      subcategories: [
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "4000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "2000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "1000000",

          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "8000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
      ],
    },
  },
  {
    id: 7,
    ipoId: 2,
    investorDetails: {
      investorName: "WELLS CAPITAL MANAGEMENT INCORPORATED",
      type: "Institutional Investor",
      turnover: "High",
      engagementRating: 45,
      meetings: "50",
      indication: "5000000",
      allocation: "1800000",
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      focus: "Aggressive",
      percentOfChange: "20",
      date: "2/4/15",
      days: "-12",
      subcategories: [
        {
          investorName: "GSMA Capital LLC MANAGEMENT INCORPORATED ",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "7000000",
        },
        {
          investorName: "GSMA Capital LLC MANAGEMENT INCORPORATED",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "3000000",
        },
        {
          investorName: "GSMA Capital LLC MANAGEMENT INCORPORATED",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "2000000",
        },
        {
          investorName: "GSMA Capital LLC MANAGEMENT INCORPORATED",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "7000000",
        },
      ],
    },
  },
  {
    id: 7,
    ipoId: 2,
    investorDetails: {
      investorName: "Baron Capital Group, Inc.h",
      type: "Venture Capital/Pvt Equity",
      turnover: "Low",
      engagementRating: 78,
      meetings: "50",
      indication: "5000000",
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      allocation: "1800000",
      percentOfChange: "-30",
      focus: "Aggressive",
      days: "5",
      date: "2/5/5",
      subcategories: [
        {
          investorName: "GSMA Capital LLC MANAGEMENT INCORPORATED",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "2000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "6000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "3000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "2000000",
        },
      ],
    },
  },
  {
    id: 1,
    ipoId: 2,
    investorDetails: {
      investorName: "Nykredit Asset Management",
      type: "Hedge Fund",
      turnover: "Low",
      engagementRating: 76,
      meetings: "50",
      firstDraftAllocation: "1800000",
      indication: "5000000",
      finalAllocation: "3100000",
      allocation: "1800000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      focus: "Yield",
      date: "22/4/5",
      days: "12",
      subcategories: [
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "6000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "6000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "7000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "5000000",
        },
      ],
    },
  },
  {
    id: 1,
    ipoId: 2,
    investorDetails: {
      investorName: "Nykredit Asset Management",
      type: "Hedge Fund",
      turnover: "Low",
      engagementRating: 76,
      meetings: "50",
      firstDraftAllocation: "1800000",
      indication: "5000000",
      finalAllocation: "3100000",
      allocation: "1800000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      focus: "Yield",
      date: "12/4/10",
      days: "5",
      subcategories: [
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "6000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "7000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "1000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "7000000",
        },
      ],
    },
  },
  {
    id: 1,
    ipoId: 2,
    investorDetails: {
      investorName: "Nykredit Asset Management",
      type: "Hedge Fund",
      turnover: "Low",
      engagementRating: 76,
      meetings: "50",
      firstDraftAllocation: "1800000",
      indication: "5000000",
      finalAllocation: "3100000",
      allocation: "1800000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      focus: "Yield",
      date: "2/10/15",
      days: "88",
      subcategories: [
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          indication: "5000000",
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "5000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "5000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "9000000",
        },
      ],
    },
  },
  {
    id: 1,
    ipoId: 2,
    investorDetails: {
      investorName: "Nykredit Asset Management",
      type: "Hedge Fund",
      turnover: "Low",
      engagementRating: 76,
      meetings: "50",
      firstDraftAllocation: "1800000",
      indication: "5000000",
      finalAllocation: "3100000",
      allocation: "1800000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      focus: "Yield",
      date: "20/4/5",
      days: "-45",
      subcategories: [
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "2000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "6000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "8000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "9000000",
        },
      ],
    },
  },

  {
    id: 14,
    ipoId: 2,
    investorDetails: {
      investorName: "Nykredit Asset Management",
      type: "Hedge Fund",
      turnover: "Medium",
      engagementRating: 76,
      indication: "5000000",
      meetings: "50",
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      allocation: "1800000",
      focus: "Yield",
      date: "23/4/5",
      days: "-25",
      subcategories: [
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "7000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "8000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "5000000",
        },
        {
          investorName: "GSMA Capital LLC",
          type: "Institutional Investor",
          turnover: "Medium",
          meetings: 53,
          firstDraftAllocation: 1200000,
          finalAllocation: 1500000,
          percentOfAllocation: 34,
          indication: "5000000",
        },
      ],
    },
  },
];

export const finalAllocationHeadersData = [
  {
    label: "Investor Name",
    value: "investor_name",
  },
  {
    label: "Type",
    value: "type",
    icon: sortIcon,
  },

  {
    label: "Engagement Rating",
    value: "engagement_rating",
  },
  {
    label: "Cornerstone",
    value: "corner_stone",
  },
  {
    label: "Indication",
    value: "Indi",
  },

  {
    label: "1st Draft Allocation",
    value: "draft_allocation",
    icon: sortIcon,
  },
  {
    label: "Allocated",
    value: "allocated",
  },
  {
    label: "% Of Allocation",
    value: "%_of_allocation",
    icon: sortIcon,
  },
  {
    label: "Allocation Value",
    value: "first_allocation",
  },

  {
    label: "+ 90 days",
    value: "of_change",
    icon: sortIcon,
  },
  {
    label: "+ 180 days",
    value: "of_change",
    icon: sortIcon,
  },
];

export const InvestorIPOData = [
  {
    ticker: "AAPL",
    company: "Apple Inc.",
    sector: "Technology",
    cornerstone: "Yes",
    pricing_Date: "2023-01-15",
    final_Deal_size: "30000000",
    allocation: "20%",
    total_location: "20%",
    market_cap: "7000000",
    shares_of_ipo: "10000000",
    Days90: "+5%",
    Days180: "+10%",
    Days270: "+15%",
    Days360: "+20%",
    id: 1,
  },
  {
    ticker: "AAPL",
    company: "Apple Inc.",
    sector: "Technology",
    cornerstone: "Yes",
    pricing_Date: "2023-01-15",
    final_Deal_size: "5000000",
    allocation: "30%",
    total_location: "20%",
    market_cap: "70000",
    shares_of_ipo: "300000000",
    Days90: "+5%",
    Days180: "+10%",
    Days270: "+15%",
    Days360: "-20%",
    id: 1,
  },
  {
    ticker: "AAPL ",
    company: "Apple Inc. managemnet ltd",
    sector: "Technology",
    cornerstone: "Yes",
    pricing_Date: "2023-01-15",
    final_Deal_size: "20000",
    allocation: "30%",
    total_location: "20%",
    market_cap: "2000",
    shares_of_ipo: "600000",
    Days90: "+5%",
    Days180: "+10%",
    Days270: "+15%",
    Days360: "+20%",
    id: 1,
  },
  {
    ticker: "AAPL",
    company: "Apple Inc.",
    sector: "Technology",
    cornerstone: "Yes",
    pricing_Date: "2023-01-15",
    final_Deal_size: "1000000",
    allocation: "30%",
    total_location: "20%",
    market_cap: "4000000",
    shares_of_ipo: "40000000",
    Days90: "+5%",
    Days180: "+10%",
    Days270: "+15%",
    Days360: "+20%",
    id: 1,
  },
];

export const InvestorHeadersData = [
  {
    label: "Ticker",
    value: "investor_name",
  },
  {
    label: "Company",
    value: "type",
  },

  {
    label: "Sector",
    value: "engagement_rating",
    icon: sortIcon,
  },
  {
    label: "Cornerstone",
    value: "corner_stone",
    icon: sortIcon,
  },
  {
    label: "Pricing Date",
    value: "Indi",
    icon: sortIcon,
  },

  {
    label: "Final Deal Size",
    value: "draft_allocation",
    icon: sortIcon,
  },

  {
    label: "% Of Allocation",
    value: "%_of_allocation",
    icon: sortIcon,
  },
  {
    label: "Market Cap",
    value: "first_allocation",
    icon: sortIcon,
  },
  {
    label: "Shares at IPO",
    value: "first_allocation",
  },

  {
    label: "+ 90 days",
    value: "of_change",
    icon: sortIcon,
  },
  {
    label: "+ 180 days",
    value: "of_change",
    icon: sortIcon,
  },
  {
    label: "+ 270 days",
    value: "of_change",
    icon: sortIcon,
  },
  {
    label: "+ 360 days",
    value: "of_change",
    icon: sortIcon,
  },
  {
    label: "Px",
    value: "of_change",
    icon: sortIcon,
  },
];

export const Donutchart1firstAllcoation = [
  {
    ticker: "YDLE",
    details: [
      {
        value: 89,
        slug: "Institutional Investor",
      },
      {
        value: 90,
        slug: "Mutual Fund",
      },
      {
        value: 98,
        slug: "Venture Capital",
      },
    ],
  },
];

export const Donutchart2firstAllcoation = [
  {
    ticker: "YDLE",
    details: [
      {
        value: 10000,
        slug: "Venture Capital",
      },
      {
        value: 120000,
        slug: "Mutual Fund",
      },
      {
        value: 60000,
        slug: "Institutional Investor",
      },
    ],
  },
];

export const InvestorIpoTabsInfo = [
  {
    label: "Investor Behaviour",
    value: "investor_behaviour",
    component: InvestorIPOTable,
  },
  {
    label: "Analysis",
    value: "final_allocation",
    component: IpoAnalysis,
  },
];

export const investorHeadersData = [
  {
    label: "Investor Name",
    value: "investor_name",
  },
  {
    label: "Type",
    value: "type",
    icon: sortIcon,
  },

  {
    label: "Turnover",
    value: "turnover",
    icon: sortIcon,
  },
  {
    label: "Focus",
    value: "firstDraftAllocation",
    icon: sortIcon,
  },
  {
    label: "Shares",
    value: "allocation",
    icon: sortIcon,
  },

  {
    label: " Allocation Value",
    value: "percentOfChange",
    icon: sortIcon,
  },

  {
    label: "+ 90 days",
    value: "of_change",
  },
  {
    label: "+ 180 days",
    value: "of_change",
  },
  {
    label: "+ 270 days",
    value: "of_change",
  },
  {
    label: "+ 360 days",
    value: "of_change",
  },
];
