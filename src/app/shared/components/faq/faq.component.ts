import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string | string[];
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  visibleCount = 3;
  showAll = false;
  searchText = '';
  activeTab = 'General Information';

  tabs: string[] = [
    'General Information',
    'Application Tips',
    'Improving Eligibility',
    'Interest Rates & Fees',
    'Loan Management & Repayments',
    'Renewal & Referral',
    'Refer & Earn'
  ];

  faqs: Record<string, FaqItem[]> = {
    'General Information': [
      {
        question: 'Is JK Capital Finance a Philippine-based company?',
        answer: 'JK Capital Finance is registered as a financing institution in the Philippines, dedicated to serving the financial needs of small and medium-sized businesses. Established in 2014, it offers a range of business loans, including secured and unsecured options, with amounts ranging from PHP 300,000 to PHP 50,000,000. The company is registered with the Securities and Exchange Commission (SEC) in the Philippines, which provides official verification of its registration.'
      },
      {
        question: 'Who is JK Capital financing for?',
        answer:[
          'Our short-term business loans and financing solutions are designed for small and medium enterprises (SMEs) — from growing family businesses to established companies that need working capital to manage cash flow, fund projects, or seize new opportunities.', 
          'Disclosing the nature of your business and purpose of application helps us provide the best structure for loans and financing. '
        ]
      },
      {
        question: 'What SME industries does JK Capital support?',
        answer: 'JK Capital supports a wide range of SME industries, including agriculture and agribusiness, technology and IT services, trading and wholesale/distribution, manufacturing, construction, logistics and transportation, retail, healthcare, professional services, energy, pharmaceuticals, and other operating SMEs. Each application is assessed individually based on the business model, cash flow, and financing needs, regardless of industry.'
      },
      {
        question: 'What types of financing do you offer?',
        answer: [
          'We offer a suite of short-term financing solutions.',
          '- Standard business loans - secured or unsecured',
          '- Revolving credit lines - one-time approval, multiple drawdowns',
          '- Short-term working capital loans',
          '- Project financing',
          '- Receivables-based financing i.e., invoice or PO financing, and check rediscounting',
          '- Structured facilities combining P&L and cash flow analysis',
          '- Alternative financing solutions for businesses declined by banks'
        ]
      },
      {
        question: 'Is this a bank loan?',
        answer: 'No. We are a non-bank financing company, which allows us to be more flexible, faster, and more practical in how we structure financing for SMEs.'
      },
      {
        question: 'What can I use the funds for?',
        answer: [
          'You can use the funds for:',
          '- Working capital',
          '- Inventory or restocking',
          '- Project financing',
          '- Managing payment delays',
          '- Bridging cash flow gaps',
          '- Business expansion',
          '- Supply chain financing',
          'There are no rigid restrictions as long as the funds support your business operations.'
        ]
      },
      {
        question: 'What is short-term financing or a short-term loan?',
        answer: 'Short-term financing is a loan designed to meet immediate business needs, such as working capital, inventory purchases, or bridging cash flow gaps. These loans typically have shorter repayment periods, usually within 3 to 12 months. The Credit Line facility has a 12 to 24 months repayment term.'
      },
      {
        question: 'What is the benefit of short-term financing?',
        answer: 'Short-term financing provides faster access to capital, flexible repayment structures, and funding that matches your business cash flow cycle. It helps SMEs respond quickly to opportunities or challenges without long-term financial strain.'
      },
      {
        question: 'Does JK Capital practice responsible lending?',
        answer: [
          'Yes. We practice responsible lending and advocate responsible borrowing. Our goal is not to overextend your business, but to provide financing that supports sustainable growth, enable results, bridge financial gaps, and foster long-term stability.',
          'JK Capital Finance complies with The Truth in Lending Act (TILA), which requires lenders to clearly disclose loan terms and costs. This helps borrowers make informed financial decisions and promotes fair lending practices.'
        ]
      },
      {
        question: 'What is the Truth in Lending Act (TILA)?',
        answer: 'The Truth in Lending Act (TILA) requires lenders to clearly disclose loan terms and costs, ensuring transparency and helping borrowers make informed financial decisions.'
      },
      {
        question: 'What if my business was declined by a bank? Can I still apply at JK Capital?',
        answer: 'Being declined by a bank does not mean you have no options. Many SMEs come to us after a bank says, “no.” We specialize in alternative financing built around how your business actually runs, not just how it looks on paper.'
      },
      {
        question: 'What are the common reasons financial institutions disapprove loan applications?',
        answer: [
          'Loan applications may not be approved for several reasons, including:',
          '1. Loan amount requested exceeds current cash flow capacity.',
          '2. Financial records are inconsistent or insufficient for the requested facility.',
          '3. Collateral value or structure does not meet requirements.',
          '4. Overall risk assessment does not align with responsible lending guidelines.',
          'While institutions aim to be transparent and fair, disclosing the specific details behind a loan disapproval is not mandatory.',
          'A disapproval does not reflect the value or potential of your business; it often means the application needs adjustment or better timing. If you have been disapproved elsewhere, JK Capital is open to entertain your application.'
        ]
      },
      {
        question: 'Where is JK Capital located?',
        answer: [
          'We have 5 central locations that service customers nationwide. Depending on your business location, the center nearest you will service your requirements.',
          'We encourage you to first accomplish an application form via our website or reach out to our Loan Account Officer. Once your application is received, a Loan Account Officer will guide you through the process.',
          
          'Head Office:',
          'Unit 3302-D, West Tower, Tektite Towers, Exchange Road, Ortigas Center 1605',
          'Phone: (02) 5328-2191',
          'Email: info@jkcapital.com.ph, loans@jkcapital.com.ph',
          'For Loan Consultants & Agencies: relations@jkcapital.com.ph',

          'Malolos, Bulacan:',
          'Unit E1, AL Building, KM 38 McArthur Highway, Zone 5, San Pablo, Malolos City, Bulacan',
          'Mobile: 0916-3150874 (Globe) | 0998-9632461 (Smart)',
          'Phone: (044) 791-0241',

          'Cabanatuan, Nueva Ecija:',
          '2nd Floor, Unit 11, Priscila Building, Brgy. H. Concepcion, Maharlika Highway',
          'Mobile: 0915-6232461 (Globe) | 0998-5514189 (Smart)',
          'Phone: (044) 803-6399',

          'Cebu:',
          'Unit 2-I, 2nd Floor, 347 V. Rama Avenue, Guadalupe, Cebu City',
          'Mobile: 0919-6571035 (Smart) | 0966-2188379 (Globe)',
          'Phone: (032) 239-6477',

          'Davao:',
          'Door 2A, JRDC Building, Pink Street, Spring Village, Ma-a, Davao City',
          'Mobile: 0917-6354509 (Globe) | 0961-1184789 (Smart)'
        ]
      },
      {
        question: 'Why partner with JK Capital for short-term financing?',
        answer: 'We go beyond capital. We structure financing around how your business actually operates  —combining cash flow insights, practical timelines, and responsible lending—to help you grow without unnecessary pressure.'
      }
    ],

    'Application Tips': [
      {
        question: 'How do I apply for a business loan or financing?',
        answer: [
          'Submit an inquiry through our website by filling out the Application Form or calling our Loan Account Officer. You pre-qualify for financing if you are at least 20 years old, with a registered business that\'s been operational for at least a year, and have a bank account that\'s been active for at least 1 year.',
          'Our Loan Account Officer will reach out to you to guide you through the application process, requirements, and help structure a loan or financial solution that fits your business.'
        ]
      },
      {
        question: 'What are the criteria for eligibility?',
        answer: [
          'Your business has to be operational for at least 1 year.',
          'You have an active bank account (1 year minimum).',
          'You are between 20 to 70 years old.',
          'You have a co-borrower or co-maker.'
        ]
      },
      {
        question: 'What are the requirements for application?',
        answer: [
          'These requirements for application should be completely submitted to begin pre-qualification assessment and processing.',
          '- Audited and internal financial statement; the latest ITR.',
          '- Past 3-month bank statement and express/written consent for JK Capital to conduct a bank verification.',
          '- Business, DTI and Mayor’s permit to operate in the Philippines.',
          'To strengthen your eligibility, you may present documentation of existing or prospective projects or contracts.', 
          'The processing period of 5 to 7 days begin from the time all requirements are submitted.',
        ]
      },
      {
        question: 'What is the minimum and maximum loan amount?',
        answer: 'Loanable amount ranges from P300,000 to P50,000,000. The final loan offer depends on the evaluation of your business and the approval of the Credit Committee.'
      },
      {
        question: 'How do I know if I am eligible?',
        answer: 'Once you have submitted your application and all the requirements, we will pre-qualify your application within 24 hours. You will be informed by call or email. This is however, not the loan approval. The latter is based on the final assessment of your business financials and the approval of the Credit Committee.'
      },
      {
        question: 'How much can I borrow?',
        answer: 'You may access financing from P300K up to ₱50 million, depending on your business profile, financials, and structure of the facility. The final loan offer is subject to the Credit Committee’s assessment and approval.'
      },
      {
        question: 'How long is the processing time for a business loan?',
        answer: 'Loan processing takes 5 to 7 working days from the day the customer submits all financial documents required. When a loan has collateral, it will take a few more days for Credit Investigation (CI). As part of the application method, we will seek your consent to conduct a credit investigation and verify with the bank.'
      },
      {
        question: 'How is a credit investigation conducted?',
        answer: 'A credit investigation may include an office or site visit to your place of operations, inspection of pledged collateral (if applicable), bank account verification, and a review of available credit records or credit scores. These steps are conducted professionally and confidentially to better understand your business operations and risk profile.'
      },
      {
        question: 'How fast can I get approved?',
        answer: [
          'Unlike traditional banks with highly rigid underwriting guidelines, where loan approvals may take months, JK Capital approvals can be completed in as fast as 5–7 business days, provided all required documents are submitted. If the requirements are insufficient, JK Capital may request additional information to better assess the viability of the application.',
          'Applications involving collateral may require additional assessment time.'
        ]
      },
      {
        question: 'What is the basis for the loan amount approved?',
        answer: 'We base the approved loan amount on your cash flow, financial performance, repayment ability, and collateral, with the goal of supporting your growth without overextending your business.'
      },
      {
        question: 'What are the common reasons a loan application is disapproved?',
        answer: [
          'Loan applications may not be approved for several reasons, Including but not limited to the following conditions:',
          '1. Incomplete or missing documents required to properly assess the application.',
          '2. Loan amount requested exceeds current cash flow capacity.',
          '3. Financial records are inconsistent or insufficient for the requested facility.',
          '4. Collateral value or structure does not meet requirements.',
          '5. Overall risk assessment does not align with responsible lending guidelines.',
          'While we aim to be transparent and fair, we are not mandated to disclose the specific details behind a loan disapproval. A disapproval does not reflect the value or potential of your business; it often means the application needs adjustment or better timing.'
        ]
      }
    ],

    'Improving Eligibility': [
      {
        question: 'What is a financial statement?',
        answer: [
          'A financial statement is a document that shows your business’ financial position and performance over a period of time. It helps lenders understand your revenues, expenses, assets, liabilities, and overall cash flow.',
          'There are generally two types used in loan applications that help provide insight into how your business operates and manages its finances.',
          '- Audited financial statements, prepared and verified by an independent external auditor for accuracy and compliance.',
          '- Internal (or management) financial statements, prepared by your business for internal tracking and decision-making.',
        ]
      },
      {
        question: 'Do I need a perfect financial statement?',
        answer: 'No. We understand that SME financials don’t always look perfect on paper. We look beyond standard templates and assess your business holistically. Its cash flow behavior, operations, and real-world context. This is why we ask for more internal documentation of business financials.'
      },
      {
        question: 'What is a collateral?',
        answer: 'Collateral is an asset pledged to support your loan. It helps reduce risk and allows us to offer better-structured financing, especially for growing SMEs that may not fit traditional bank criteria.'
      },
      {
        question: 'How does collateral-to-loan ratio work?',
        answer: 'The collateral-to-loan ratio compares the value of the asset you pledge to the amount you borrow. The required ratio depends on the type, liquidity, and condition of the collateral, as well as your business cash flow and overall risk profile.'
      },
      {
        question: 'Does JK Capital accept collateral?',
        answer: 'Yes, JK Capital accepts collateral to enhance the credit application.'
      },
      {
        question: 'Does JK Capital grant loans even when a borrower has no collateral?',
        answer: 'Yes, JK Capital grants unsecured loans to new and recurring customers. Pre-qualification for a loan, the amount and terms are dependent on the condition of the borrowers business, its financials, income, cash flow, etc. Pledging collateral will help improve the terms.'
      },
      {
        question: 'What kinds of collateral does JK Capital accept?',
        answer: 'Collateral requirements vary depending on the facility. Some options may require real estate, vehicles not older than 5 years, receivables, or other assets, while others focus more on cash flow strength and deal structure.'
      },
      {
        question: 'How much should my collateral be worth?',
        answer: 'There is no one-size-fits-all value. Generally, collateral must reasonably cover the loan exposure, but we avoid over-collateralization. Our goal is to structure financing that supports your business — not to tie up more assets than necessary.'
      },
      {
        question: 'What does JK Capital do with the collateral I pledge?',
        answer: 'Nothing operationally. Collateral is held strictly as security, not as a source of profit. We do not sell, lease, or utilize pledged assets while your loan is active.'
      },
      {
        question: 'What happens to my collateral while my business loan is ongoing?',
        answer: 'Your collateral remains yours and stays in your use and possession, unless otherwise agreed. We do not take control of, use, or generate income from your collateral during the loan term.'
      },
      {
        question: 'I have another business loan elsewhere. Can I still apply?',
        answer: 'Yes. Having existing loans does not automatically disqualify you. We assess your application based on your overall cash flow, repayment capacity, and financial position to determine if additional financing is manageable and responsible for your business.'
      },
      {
        question: 'I was disapproved by a another institution. Can I still apply?',
        answer: 'Yes. A bank disapproval does not mean you have no other options. We review applications based on your current business realities, cash flow, and financing needs, not just bank-specific criteria.'
      },
    ],

    'Interest Rates & Fees': [
      {
        question: 'What is the interest rate of JK Capital loans?',
        answer: 'Interest rates range from 2.5% to 3.5% added on monthly. New customers start with 3.5%. The rate gets better depending on the improving risk profile of customers, the size of the loan, and availability of collateral.'
      },
      {
        question: 'How is the interest rate computed?',
        answer: 'The interest is computed monthly and added to each scheduled repayment, based on the agreed loan terms and outstanding balance.'
      },
      {
        question: 'Is the interest rate negotiable?',
        answer: 'Pledging collateral helps improve the general terms of the loan.'
      },
      {
        question: 'What is the 5% processing fee for?',
        answer: 'This is a one-time fee collected upfront, deducted from the loan released.  It covers the cost of evaluating, structuring, and administering your loan. This includes credit assessment, documentation, legal and compliance checks, and account setup. The fee ensures your financing is processed efficiently, responsibly, and with full regulatory compliance.'
      },
      {
        question: 'What are the terms of a standard business loan?',
        answer: 'The business loan terms will vary based on the approval of your loan. We have a minimum of 3 months to a maximum of 1 year repayment terms depending on the approval of our Credit Committee.'
      }

    ],

    'Loan Management & Repayments': [
      {
        question: 'How are repayments structured?',
        answer: [
          'Because JK Capital financing is short-term, we offer repayment from 3 to 12 months, with payments monthly or bi-monthly.',
          'Repayment terms are designed to align with your cash flow cycle, with tenors typically ranging from 3 to 12 months. You only pay interest based on what you use, depending on the facility.'
        ]
      },
      {
        question: 'What happens to my collateral if I miss repayment?',
        answer: 'If a payment issue arises, our first step is always to work with you. We understand that SMEs face cash flow fluctuations, and we explore restructuring or adjustment options before taking any further action.'
      },
      {
        question: 'What happens to my collateral if I default?',
        answer: 'Only in cases of unresolved and prolonged default does enforcement become a last resort. Even then, any action follows legal due process, with the objective of recovering the obligation, not penalizing your business.'
      },
      {
        question: 'Will I get my collateral back after full payment?',
        answer: 'Yes. Once your loan is fully settled, all claims over your collateral are released promptly, and ownership remains fully with you.'
      },
      {
        question: 'How will I know if my loan is approved?',
        answer: 'Once your loan is approved, your Loan Account Officer will personally call and email you to confirm the approval, explain the next steps, and advise you on the loan release date and any final requirements.'
      },
      {
        question: 'How will my approved business loan be released to me?',
        answer: 'Loan proceeds are released via check, handed face-to-face at our office. During the release, we also complete the required documentation and secure post-dated checks based on your agreed repayment schedule.'
      },
      {
        question: 'What are the requirements to claim my business loan release?',
        answer: 'Both the borrower and co-borrower must be present and bring two (2) valid government-issued IDs each, identical to those submitted during the application, for identity verification and release processing.'
      },
      {
        question: 'What are the channels for business loan repayment?',
        answer: 'At the time of loan release, the borrower submits post-dated checks (PDCs) corresponding to the agreed payment terms. These checks serve as the primary repayment channel for the duration of the loan.'
      }
    ],

    'Renewal & Referral': [
      {
        question: 'Will I enjoy better interest rates and overall terms when I renew?',
        answer: 'In general, it is our intent to provide preferential terms to highly valued renewing customers.  Renewal however, doesnt guarantee this. Final terms are subject to the approval of the Credit Committee.  The basis for loan approval terms apply.'
      },
      {
        question: 'If I refer a friend or family for a business loan, do I get a commission?',
        answer: 'A successful loan release resulting from your referral will earn you 1% commission on the loan principal amount. Please visit our Refer & Earn page.'
      },
      {
        question: 'If I refer a friend or family for a business loan, will the terms of my next loan improve?',
        answer: 'A successful referral loan entitles you to a commission. It does not entitle you to preferential terms on your next loan.'
      },
    ],

    'Refer & Earn': [
      {
        question: 'How can I refer a customer and earn?',
        answer: [
          'You can choose the best referral scheme according to your goals.',
          '- Become a One-time Referrer by supplying JK Capital with the name and contact details of a potential borrower. We do the work of securing the application requirements and processing the application. If the referral materializes into a loan released, you receive a 1% commission.',
          '- Become an Affiliate Referrer by registering on this website. You will be given a unique Affiliate Referrer code. This ensures that we track and credit the successful loan to you. Everytime your referral materializes into a loan released, you get 1% commission.  When your direct clients refer another client, your direct clients renew, you get 1% commission.',
          '- Become a Loan Consultant by registering on this website. You will be given a unique Loan Consultant code to ensure that we track and credit the successful loan to you. Every successful loan released entitles you to a full 3% agent commission. Referrals and renewals by your direct customers will earn you additional commission; 1% for 1st degree referrals, 0.5% for 2nd degree referrals, and 2% renewal.',
          'Visit our Refer & Earn page for more information.'
        ]
      },
      {
        question: 'How are the referral commissions paid out?',
        answer: [
          'Commissions are awarded only if the application materializes into a loan released. The commissions will be deposited in your bank acccount after the loan has been released and received by the borrower.',
          'Unlike others, JK Capital releases the full commission without waiting for the borrower to complete his repayment.',
          'Visit our Refer & Earn page.'
        ]
      },
    ]
  };

  /** SEARCH FILTER (handles string + list) */
  get filteredFaqs(): FaqItem[] {
    const list = this.faqs[this.activeTab] || [];

    // SEARCH MODE → show all matching
    if (this.searchText.trim()) {
      const keyword = this.searchText.toLowerCase();

      return list.filter(faq => {
        const answerText = Array.isArray(faq.answer)
          ? faq.answer.join(' ')
          : faq.answer;

        return (
          faq.question.toLowerCase().includes(keyword) ||
          answerText.toLowerCase().includes(keyword)
        );
      });
    }

    // NORMAL MODE → limit to 3 unless "More" clicked
    return this.showAll ? list : list.slice(0, this.visibleCount);
  }

  /** ACCORDION TOGGLE */
  toggle(item: FaqItem): void {
    this.filteredFaqs.forEach(faq => {
      if (faq !== item) {
        faq.open = false;
      }
    });
    item.open = !item.open;
  }

  /** TAB CHANGE */
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.searchText = '';
    this.showAll = false;
    this.faqs[tab]?.forEach(faq => (faq.open = false));
  }

  get hasMoreFaqs(): boolean {
    return (
      !this.searchText &&
      !!this.faqs[this.activeTab] &&
      this.faqs[this.activeTab].length > this.visibleCount
    );
  }

  /** TEMPLATE HELPERS (Angular-safe) */
  isArray(value: string | string[]): value is string[] {
    return Array.isArray(value);
  }

  isString(value: string | string[]): value is string {
    return typeof value === 'string';
  }
}
