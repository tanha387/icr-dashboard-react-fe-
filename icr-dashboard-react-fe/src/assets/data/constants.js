import indicator1 from "../../assets/images/Icons/indicator1.svg";
import indicator2 from "../../assets/images/Icons/indicator2.svg";
import indicator3 from "../../assets/images/Icons/indicator3.svg";
import sortIcon from "../../assets/images/Icons/sortIcon.svg";
import IndiviualIpoviewTable from "../../components/indiviualIpoView/IpoInvestorTable";
import Page1 from "../../pages/NotFoundPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Analysis from "../../components/Analysis/Analysis";
import AnalysisView from "../../components/AnalysisView/AnalaysisView";

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
    subcategories: [
      {
        label: "Subcategory 1",
        value: "subcategory_1",
        component: Analysis,
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
    label: "Turn Over",
    value: "turn_over",
    icon: sortIcon,
  },
  {
    label: "Engagement Rating",
    value: "engagement_rating",
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
      investorName: "Nykredit Asset Management",
      type: "Hedge Fund",
      turnover: "Low",
      engagementRating: 76,
      meetings: "50",
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      subcategories: [
        {
          category1: "Fidelity Advisor Series I - Equity Growth Fund",
          category2: "Fidelity Advisor Series VII - Semiconductors Fund",
          category3: "Fidelity Advisor Series V",
          category4: "Fidelity Advisor Series V",
        },
      ],
    },
  },
  {
    id: 5,
    ipoId: 2,
    investorDetails: {
      investorName: "Fidelity management and research",
      type: "Institutional Investor",
      turnover: "Medium",
      engagementRating: 11,
      meetings: "30",
      firstDraftAllocation: "5200000",
      finalAllocation: "1100000",
      percentOfAllocation: "4.34",
      percentOfChange: "-60",
      subcategories: [
        {
          category1: "Fidelity Advisor Series I - Equity Growth Fund",
          category2: "Fidelity Advisor Series VII - Semiconductors Fund",
          category3: "Fidelity Advisor Series V",
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
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      percentOfChange: "20",
      subcategories: [
        {
          category1: "Fidelity Advisor Series I - Equity Growth Fund",
          category2: "Fidelity Advisor Series VII - Semiconductors Fund",
          category3: "Fidelity Advisor Series V",
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
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      percentOfChange: "-30",
      subcategories: [
        {
          category1: "Fidelity Advisor Series I - Equity Growth Fund",
          category2: "Fidelity Advisor Series VII - Semiconductors Fund",
          category3: "Fidelity Advisor Series V",
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
      meetings: "50",
      firstDraftAllocation: "1800000",
      finalAllocation: "3100000",
      percentOfAllocation: "8.34",
      percentOfChange: "-10",
      subcategories: [
        {
          category1: "Fidelity Advisor Series I - Equity Growth Fund",
          category2: "Fidelity Advisor Series VII - Semiconductors Fund",
          category3: "Fidelity Advisor Series V",
        },
      ],
    },
  },
];
