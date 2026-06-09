export const RETURN_DATE = new Date('2026-07-07');

export const faqData = [
  {
    category: "childcare",
    icon: "👶",
    label: "Childcare",
    color: "#D4A017",
    bgColor: "#FDF6E3",
    questions: [
      {
        q: "I rely on flexible hours for school pickup. What options do I have?",
        a: "Aoba Systems is actively evaluating an on-site daycare facility within our office building. We expect to announce a confirmed partner by end of Q3. In the interim, HR can connect you with emergency childcare subsidies and flexible start/end time arrangements — please submit a request through HR Connect."
      },
      {
        q: "Will there be a company daycare?",
        a: "Senior management is in discussions with three daycare operators for a potential in-office facility. This is a genuine priority, not a vague promise — we will provide a formal update by July 31. Until then, see the nearby daycare options listed below."
      },
      {
        q: "Can I request adjusted hours for school drop-off and pick-up?",
        a: "Yes. Temporary adjusted schedules (e.g., 8:00–17:00 or 10:00–19:00) can be arranged with manager approval for up to 90 days while permanent childcare arrangements are made. Contact your line manager and CC hr@aobasystems.jp."
      }
    ],
    resources: {
      title: "Daycare Centers Near Aoba Systems HQ",
      note: "The company is considering an in-office daycare — updates by July 31.",
      items: [
        { name: "Sakura Kids Nursery", distance: "0.3 km", address: "2-14 Honcho, Chiyoda-ku", phone: "03-1234-5678", notes: "Ages 0–6, extended hours until 20:00" },
        { name: "Rainbow Child Care Center", distance: "0.7 km", address: "5-2 Marunouchi", phone: "03-2345-6789", notes: "English/Japanese bilingual program" },
        { name: "Little Stars Daycare", distance: "1.1 km", address: "3-8 Otemachi", phone: "03-3456-7890", notes: "Accepts corporate subsidy vouchers" },
        { name: "Akachan House Nursery", distance: "1.4 km", address: "1-20 Kanda Nishikicho", phone: "03-4567-8901", notes: "Newborn–5 years, weekend available" }
      ]
    }
  },
  {
    category: "relocation",
    icon: "🏠",
    label: "Living Far Away",
    color: "#4A8C5C",
    bgColor: "#E8F5EC",
    questions: [
      {
        q: "I moved far from the office during the pandemic. What support is available?",
        a: "Aoba Systems offers a one-time Relocation Assistance Package for affected employees: ¥150,000 toward moving expenses, plus priority referrals to our partnered real estate agencies. Submit a Relocation Assistance Request to HR by July 7 to qualify."
      },
      {
        q: "Is remote work available as an exception for those who have relocated?",
        a: "The current policy does not provide individual exceptions. However, the Relocation Assistance Package is designed to help make the transition feasible. If your situation involves a disability or caring responsibility, additional accommodation processes apply — see those sections."
      },
      {
        q: "How do I find housing closer to the office quickly?",
        a: "We have partnered with three real estate agencies that specialize in quick placements near our HQ. They are briefed on our situation and can prioritize viewings for Aoba employees. See the contacts listed below."
      }
    ],
    resources: {
      title: "Real Estate & Moving Companies",
      note: "Mention 'Aoba Systems relocation' for priority service from our partner agencies.",
      items: [
        { name: "Mitsui Urban Real Estate", type: "Real Estate", address: "Nihonbashi Office, Chuo-ku", phone: "03-5555-0101", notes: "Corporate relocation specialists, 24-hr response" },
        { name: "Century 21 Chiyoda", type: "Real Estate", address: "1-7 Uchikanda", phone: "03-5555-0202", notes: "Partner agency — priority listings for Aoba staff" },
        { name: "Leopalace21 Corporate", type: "Real Estate", address: "Kanda Branch", phone: "03-5555-0303", notes: "Furnished short-term options from 1 month" },
        { name: "Kuroneko Moving Pro", type: "Moving Company", address: "Akihabara Depot", phone: "03-5555-0404", notes: "Corporate rate: 15% off for Aoba employees" },
        { name: "Art Moving Center", type: "Moving Company", address: "Soto-Kanda", phone: "03-5555-0505", notes: "Weekend moves available, provides packing materials" }
      ]
    }
  },
  {
    category: "accessibility",
    icon: "♿",
    label: "Accessibility & Disabilities",
    color: "#2D6A4F",
    bgColor: "#E8F5EC",
    questions: [
      {
        q: "I have a disability and my home setup was specifically adapted. What does the office offer?",
        a: "Our HQ was upgraded in 2023 to full barrier-free compliance. This includes: automatic doors on all floors, height-adjustable desks (request via FM portal), accessible restrooms on every floor, quiet/low-stimulation rooms on floors 3 and 7, and reserved parking for blue badge holders. A detailed Accessibility Facilities Guide is available on the intranet."
      },
      {
        q: "Can I request specific equipment or workspace adjustments?",
        a: "Yes. The Reasonable Adjustment Request process allows any employee to request ergonomic equipment, assistive technology, noise-cancelling headsets, specialized seating, or adapted workstation layouts. Requests are processed within 5 business days. Contact accessibility@aobasystems.jp or your HR Business Partner."
      },
      {
        q: "What if returning to the office is genuinely not possible due to my condition?",
        a: "Employees whose documented medical condition makes full-time office attendance impossible are entitled to a formal Reasonable Adjustment Assessment. This is a protected process under the Act for Eliminating Discrimination against Persons with Disabilities. Outcomes may include hybrid arrangements, phased returns, or role adjustments. Contact the Occupational Health team confidentially at oh@aobasystems.jp."
      }
    ],
    resources: {
      title: "Accessible Facilities at Aoba HQ",
      note: "All facilities listed below meet the 2023 Barrier-Free Design Standard. More accessibility upgrades are planned for Q3.",
      items: [
        { name: "Automatic Entrance Doors", location: "All building entrances", notes: "Sensor-activated, wide clearance (120cm)" },
        { name: "Height-Adjustable Desks", location: "All floors — request via FM portal", notes: "24-hour processing, 40+ units available" },
        { name: "Accessible Restrooms", location: "Every floor (marked in blue on floor maps)", notes: "Includes emergency call system" },
        { name: "Quiet Rooms", location: "Floor 3 (Room 3F-Q) and Floor 7 (Room 7F-Q)", notes: "Low-stimulation, bookable via calendar for 1-hr slots" },
        { name: "Reserved Parking (Blue Badge)", location: "B1 Parking — Section A", notes: "4 spaces; register vehicle plate with Security" },
        { name: "Assistive Technology Library", location: "HR Office, Floor 2", notes: "Screen readers, magnifiers, ergonomic keyboards available to borrow" }
      ]
    }
  }
];

export const todoData = {
  user: {
    name: "Tanaka Hiromi",
    id: "EMP-0312",
    department: "Product Design",
    manager: "Yamamoto Kenji",
    profile: ["childcare", "relocation", "accessibility"]
  },
  tasks: [
    // Universal tasks
    {
      id: 1, category: "universal", group: "Data & Equipment",
      title: "Back up home office files to company cloud",
      description: "Upload all work documents, project files, and assets to SharePoint or OneDrive before the return date.",
      dueDate: "Jun 30", priority: "high", done: false
    },
    {
      id: 2, category: "universal", group: "Data & Equipment",
      title: "Return company-issued peripherals to IT",
      description: "Bring your company monitor, keyboard, docking station, and any loaned equipment to the IT desk on Floor 2.",
      dueDate: "Jul 7", priority: "high", done: false
    },
    {
      id: 3, category: "universal", group: "Data & Equipment",
      title: "Set up your assigned onsite workstation",
      description: "Collect your desk assignment from Facilities Management (Floor 1). Log in and verify VPN, printers, and shared drives.",
      dueDate: "Jul 7", priority: "medium", done: false
    },
    {
      id: 4, category: "universal", group: "Admin",
      title: "Update your contact info and emergency contact in HR Connect",
      description: "Ensure your current address, phone number, and emergency contact are up to date in the HR portal.",
      dueDate: "Jun 28", priority: "medium", done: false
    },
    {
      id: 5, category: "universal", group: "Admin",
      title: "Review updated office conduct and desk policy",
      description: "The desk-sharing and clean-desk policies have been updated. Read and acknowledge in HR Connect.",
      dueDate: "Jul 2", priority: "low", done: false
    },
    // Childcare tasks
    {
      id: 6, category: "childcare", group: "Childcare Arrangements",
      title: "Research and contact nearby daycare centers",
      description: "Review the 4 partner daycare centers listed in the FAQ. Contact at least two to check availability for your child's age group.",
      dueDate: "Jun 23", priority: "high", done: false
    },
    {
      id: 7, category: "childcare", group: "Childcare Arrangements",
      title: "Apply for childcare subsidy through HR",
      description: "HR offers an emergency childcare subsidy of up to ¥30,000/month. Submit form CHILD-01 to hr@aobasystems.jp.",
      dueDate: "Jun 25", priority: "high", done: false
    },
    {
      id: 8, category: "childcare", group: "Childcare Arrangements",
      title: "Discuss adjusted hours with your manager",
      description: "If school pickup conflicts with standard hours, request a temporary schedule adjustment (approved up to 90 days) via your line manager.",
      dueDate: "Jun 27", priority: "medium", done: false
    },
    // Relocation tasks
    {
      id: 9, category: "relocation", group: "Relocation",
      title: "Submit Relocation Assistance Request to HR",
      description: "Qualify for ¥150,000 moving support by submitting your request to HR before July 7. Form: RELOC-02 on HR Connect.",
      dueDate: "Jul 7", priority: "high", done: false
    },
    {
      id: 10, category: "relocation", group: "Relocation",
      title: "Contact partner real estate agencies",
      description: "Mention 'Aoba Systems relocation' to Mitsui Urban or Century 21 Chiyoda for priority listings near HQ.",
      dueDate: "Jun 25", priority: "high", done: false
    },
    {
      id: 11, category: "relocation", group: "Relocation",
      title: "Get moving quotes from partner companies",
      description: "Kuroneko Moving Pro and Art Moving Center offer corporate rates. Get at least two quotes to compare.",
      dueDate: "Jun 30", priority: "medium", done: false
    },
    {
      id: 12, category: "relocation", group: "Relocation",
      title: "Confirm commute plan if not moving immediately",
      description: "If relocation takes longer than the return date, plan your interim commute (transit routes, commuter pass update, estimated travel time).",
      dueDate: "Jul 4", priority: "medium", done: false
    },
    // Accessibility tasks
    {
      id: 13, category: "accessibility", group: "Accessibility Setup",
      title: "Submit Reasonable Adjustment Request",
      description: "Request any assistive technology, ergonomic furniture, or workspace adaptations via accessibility@aobasystems.jp. Allow 5 business days.",
      dueDate: "Jun 23", priority: "high", done: false
    },
    {
      id: 14, category: "accessibility", group: "Accessibility Setup",
      title: "Register vehicle plate for accessible parking (if applicable)",
      description: "If you hold a blue badge, register your vehicle plate with Building Security to access reserved Section A parking on B1.",
      dueDate: "Jun 30", priority: "medium", done: false
    },
    {
      id: 15, category: "accessibility", group: "Accessibility Setup",
      title: "Book a quiet room slot for your first week",
      description: "Quiet rooms on Floors 3 and 7 are bookable via the shared calendar. Reserve your preferred slots to ease the transition.",
      dueDate: "Jul 2", priority: "low", done: false
    },
    {
      id: 16, category: "accessibility", group: "Accessibility Setup",
      title: "Schedule Occupational Health consultation if needed",
      description: "If full-time attendance creates a health barrier, contact oh@aobasystems.jp for a confidential Reasonable Adjustment Assessment.",
      dueDate: "Jun 27", priority: "high", done: false
    }
  ]
};
