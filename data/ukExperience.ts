export type UkExperienceLink = {
  name: string;
  url: string;
  description: string;
  type?: "official" | "company" | "marketplace" | "discount" | "community";
  referralNote?: string;
  recommended?: boolean;
};

export type UkExperienceSection = {
  title: string;
  intro: string;
  guidance: string[];
  links: UkExperienceLink[];
};

export const octopusReferralUrl = "https://share.octopus.energy/smart-hockey-374";

export const ukExperienceHighlights = [
  "Coming to the UK can feel exciting in public and lonely in private. Prepare for both.",
  "Do not wait until landing to understand accommodation, SIM, banking, work rules, travel and emergency contacts.",
  "Keep documents, money, local address proof and important links organized before your first week begins.",
  "Ask for help early. Confidence grows faster when you know the next practical step."
];

export const ukArrivalTimeline = [
  {
    title: "Before You Fly",
    items: [
      "Save passport, visa decision, eVisa access, offer letter, accommodation details, emergency contacts and insurance documents in cloud storage and offline.",
      "Book temporary accommodation for the first few days if your permanent room is not confirmed.",
      "Carry a small cash buffer, an international card and enough funds for deposit, first rent, SIM, groceries and local travel.",
      "Prepare a UK-style CV, LinkedIn profile, passport-size photos, scanned documents and a simple monthly budget.",
      "Check baggage rules, medicine prescriptions, adaptors, warm clothing, university arrival instructions and airport-to-accommodation travel."
    ]
  },
  {
    title: "First 24 Hours",
    items: [
      "Message family after landing and share your UK address and live location for the first journey.",
      "Get connected with a UK SIM or roaming plan, then save emergency numbers, university security and landlord contacts.",
      "Reach your accommodation safely, inspect the room, photograph condition, meter readings and keys, and avoid paying extra cash without a receipt.",
      "Buy basic groceries, bedding, toiletries and transport card or app access for the first week.",
      "Sleep, eat properly and do not make big financial decisions while tired from travel."
    ]
  },
  {
    title: "First 30 Days",
    items: [
      "Open bank accounts, register with a GP where eligible, apply for or locate your National Insurance number if you plan to work, and learn how to generate right-to-work share codes.",
      "Understand rent payment dates, council tax/student exemption, utility responsibilities, broadband setup and tenancy terms.",
      "Create a weekly routine for classes, job search, groceries, laundry, budgeting, travel and rest.",
      "Start job applications only after understanding your visa work conditions and employer documentation expectations.",
      "Build a local support circle through university societies, community groups, classmates and trusted local contacts."
    ]
  }
];

export const ukExperienceSections: UkExperienceSection[] = [
  {
    title: "Official Setup, Documents And Health",
    intro:
      "Your first admin tasks are not glamorous, but they protect your stay, your work readiness and your peace of mind.",
    guidance: [
      "Use GOV.UK for immigration status, share codes, National Insurance and driving-related tasks. Avoid random paid websites that imitate official services.",
      "If you have a BRP or eVisa, check whether your National Insurance number is already available before applying.",
      "Register with a GP once you have an address in your area. Keep NHS 111 saved for non-emergency medical advice.",
      "Keep scanned copies of every important document, but never share passport, OTP, banking or visa-login details with strangers."
    ],
    links: [
      {
        name: "GOV.UK eVisa and share code",
        url: "https://www.gov.uk/view-prove-immigration-status",
        description: "View online immigration status and generate share codes where applicable.",
        type: "official"
      },
      {
        name: "Apply for a National Insurance number",
        url: "https://www.gov.uk/apply-national-insurance-number",
        description: "Official GOV.UK service for people in the UK who need an NI number for work.",
        type: "official"
      },
      {
        name: "Prove your right to work",
        url: "https://www.gov.uk/prove-right-to-work",
        description: "Official right-to-work share code guidance for workers and employers.",
        type: "official"
      },
      {
        name: "Register with a GP",
        url: "https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/",
        description: "NHS guidance for registering with a local GP surgery.",
        type: "official"
      },
      {
        name: "NHS 111",
        url: "https://111.nhs.uk/",
        description: "Non-emergency health advice in England.",
        type: "official"
      },
      {
        name: "Find your local council",
        url: "https://www.gov.uk/find-local-council",
        description: "Useful for council tax, local services, bins, housing and licensed taxi information.",
        type: "official"
      }
    ]
  },
  {
    title: "Rooms, Houses And Accommodation",
    intro:
      "Accommodation is usually the first big pressure point. A room can look perfect online, so slow down and verify before paying.",
    guidance: [
      "Never send a deposit before viewing the place live by video or in person, confirming the address and checking who owns or manages it.",
      "Ask what is included: bills, council tax, WiFi, heating, furnished items, cleaning, deposit protection and notice period.",
      "Photograph the room on move-in day. Keep payment records, tenancy agreement, inventory and landlord messages.",
      "Facebook Marketplace and local Facebook groups are active in the UK for rooms and furniture, but scam listings are common. Avoid rushed landlords, fake keys, unrealistic rent and requests for money through unusual payment methods.",
      "Students should also check university accommodation teams and approved private housing lists before choosing a private room."
    ],
    links: [
      {
        name: "Rightmove",
        url: "https://www.rightmove.co.uk/",
        description: "Large UK property portal for rooms, flats and houses to rent or buy.",
        type: "company"
      },
      {
        name: "Zoopla",
        url: "https://www.zoopla.co.uk/",
        description: "Property search for rentals, sales and area comparison.",
        type: "company"
      },
      {
        name: "OpenRent",
        url: "https://www.openrent.co.uk/",
        description: "Private landlord rental platform, useful for direct landlord listings.",
        type: "company"
      },
      {
        name: "SpareRoom",
        url: "https://www.spareroom.co.uk/",
        description: "Flatshare and room-search platform popular with students and professionals.",
        type: "company"
      },
      {
        name: "OnTheMarket",
        url: "https://www.onthemarket.com/",
        description: "Property portal for rentals and homes for sale.",
        type: "company"
      },
      {
        name: "Accommodation for Students",
        url: "https://www.accommodationforstudents.com/",
        description: "Student-focused accommodation search.",
        type: "company"
      },
      {
        name: "Unipol",
        url: "https://www.unipol.org.uk/",
        description: "Student housing charity and accommodation resource in selected UK cities.",
        type: "community"
      },
      {
        name: "Facebook Marketplace",
        url: "https://www.facebook.com/marketplace/",
        description: "Very active for rooms, furniture, small items and cars, but verify carefully and avoid advance-payment scams.",
        type: "marketplace"
      },
      {
        name: "Gumtree",
        url: "https://www.gumtree.com/",
        description: "Classifieds for rooms, furniture, cars and local items. Use extra caution with deposits and delivery scams.",
        type: "marketplace"
      }
    ]
  },
  {
    title: "Banking, Money And Payments",
    intro:
      "Open at least one high-street bank account and one digital bank when possible. This gives backup access if one app blocks, delays or asks for checks.",
    guidance: [
      "High-street banks may ask for identity, address proof, university letter or employment details. Digital banks can be faster, but still run eligibility and identity checks.",
      "Use a UK bank account for rent, wages, subscriptions, phone plans and utility direct debits.",
      "Do not share OTP, card photos, banking login, Revolut/Monzo/Starling codes or screen-sharing access with anyone.",
      "Klarna and Clearpay can spread payments, but they are still debt-like commitments. Use them only if you can pay on time."
    ],
    links: [
      {
        name: "Lloyds Bank",
        url: "https://www.lloydsbank.com/",
        description: "High-street bank option for current accounts and student banking where eligible.",
        type: "company"
      },
      {
        name: "HSBC UK",
        url: "https://www.hsbc.co.uk/",
        description: "High-street bank with current account and international banking options.",
        type: "company"
      },
      {
        name: "Santander UK",
        url: "https://www.santander.co.uk/",
        description: "High-street bank option for everyday accounts and student products where eligible.",
        type: "company"
      },
      {
        name: "Barclays",
        url: "https://www.barclays.co.uk/",
        description: "High-street bank with current accounts, student options and branch access.",
        type: "company"
      },
      {
        name: "Starling Bank",
        url: "https://www.starlingbank.com/",
        description: "Digital bank useful for app-based day-to-day spending and budgeting.",
        type: "company"
      },
      {
        name: "Monzo",
        url: "https://monzo.com/",
        description: "Digital bank popular for spending pots, app notifications and quick transfers.",
        type: "company"
      },
      {
        name: "Revolut",
        url: "https://www.revolut.com/",
        description: "Digital money app often used for travel, exchange and everyday payments.",
        type: "company"
      },
      {
        name: "Klarna",
        url: "https://www.klarna.com/uk/",
        description: "Buy-now-pay-later provider. Use carefully and pay on time.",
        type: "company"
      },
      {
        name: "Clearpay",
        url: "https://www.clearpay.co.uk/",
        description: "Instalment payment service. Check fees, dates and affordability first.",
        type: "company"
      }
    ]
  },
  {
    title: "SIM, Broadband, WiFi And Utilities",
    intro:
      "Connectivity makes every other task easier. Sort your SIM first, then broadband and utilities once your address is fixed.",
    guidance: [
      "For SIM cards, compare coverage in your postcode before choosing a cheap plan. Rural coverage can differ from city coverage.",
      "For broadband, check contract length, installation time, speed guarantee, cancellation fees and whether the property already has a line.",
      "For gas and electricity, submit meter readings on move-in day and keep photos. Ask landlord or agent who supplies the property.",
      "Octopus Energy is listed as a top recommended option for newcomers who want a simple energy setup. Verify tariff, eligibility and terms before switching."
    ],
    links: [
      {
        name: "giffgaff",
        url: "https://www.giffgaff.com/",
        description: "Flexible SIM plans and monthly bundles.",
        type: "company",
      },
      {
        name: "Lebara UK",
        url: "https://aklam.io/30tCVn6I",
        description: "Top recommended SIM option for international callers. Get 50% off for the first 3 months where eligible.",
        type: "company",
        referralNote: "Get 50% off for the first 3 months through this Lebara referral link, subject to eligibility and current terms.",
        recommended: true
      },
      {
        name: "VOXI",
        url: "https://www.voxi.co.uk/",
        description: "Mobile network with social-media-focused plans.",
        type: "company",
      },
      {
        name: "EE",
        url: "https://ee.co.uk/",
        description: "Major UK mobile and broadband provider.",
        type: "company",
      },
      {
        name: "O2",
        url: "https://www.o2.co.uk/",
        description: "Major UK mobile network and plans.",
        type: "company",
      },
      {
        name: "Three",
        url: "https://www.three.co.uk/",
        description: "Mobile and broadband plans.",
        type: "company",
      },
      {
        name: "Vodafone",
        url: "https://www.vodafone.co.uk/",
        description: "Mobile and broadband plans.",
        type: "company",
      },
      {
        name: "BT Broadband",
        url: "https://www.bt.com/broadband",
        description: "Broadband and home internet provider.",
        type: "company",
      },
      {
        name: "Virgin Media Broadband",
        url: "https://www.virginmedia.com/broadband",
        description: "Broadband provider with fibre options in many areas.",
        type: "company",
      },
      {
        name: "Sky Broadband",
        url: "https://www.sky.com/broadband",
        description: "Broadband, TV and home packages.",
        type: "company",
      },
      {
        name: "TalkTalk",
        url: "https://www.talktalk.co.uk/broadband",
        description: "Home broadband provider.",
        type: "company",
      },
      {
        name: "Hyperoptic",
        url: "https://www.hyperoptic.com/",
        description: "Full-fibre broadband available in selected buildings and areas.",
        type: "company",
      },
      {
        name: "Octopus Energy",
        url: octopusReferralUrl,
        description: "Top recommended gas and electricity supplier for a simpler home-energy setup.",
        type: "company",
        referralNote: "Get £50 off your electricity bill through this Octopus referral link, subject to eligibility and current terms.",
        recommended: true
      },
      {
        name: "British Gas",
        url: "https://www.britishgas.co.uk/",
        description: "Gas, electricity and home services provider.",
        type: "company",
      },
      {
        name: "EDF Energy",
        url: "https://www.edfenergy.com/",
        description: "Energy supplier for electricity and gas.",
        type: "company",
      },
      {
        name: "E.ON Next",
        url: "https://www.eonnext.com/",
        description: "Energy supplier for home electricity and gas.",
        type: "company",
      },
      {
        name: "OVO Energy",
        url: "https://www.ovoenergy.com/",
        description: "Energy supplier for home energy plans.",
        type: "company",
      }
    ]
  },
  {
    title: "Food, Grocery And Daily Essentials",
    intro:
      "The first grocery shop feels small, but it can change your whole week. Start simple: breakfast, rice or bread, protein, vegetables, snacks and cleaning basics.",
    guidance: [
      "Compare local supermarkets because prices vary by area. Larger stores are often cheaper than small convenience branches.",
      "Use delivery apps when needed, but do not build your full monthly budget around takeaways.",
      "Get supermarket loyalty cards early because many UK offers are card/app prices.",
      "If you are sharing a house, label food, agree cleaning basics and avoid arguments by setting kitchen expectations early."
    ],
    links: [
      {
        name: "Deliveroo",
        url: "https://deliveroo.co.uk/",
        description: "Restaurant and grocery delivery in many UK cities.",
        type: "company",
      },
      {
        name: "Uber Eats",
        url: "https://www.ubereats.com/gb",
        description: "Food and grocery delivery platform.",
        type: "company",
      },
      {
        name: "Just Eat",
        url: "https://www.just-eat.co.uk/",
        description: "Food delivery from restaurants and takeaways.",
        type: "company",
      },
      {
        name: "Tesco",
        url: "https://www.tesco.com/",
        description: "Supermarket with stores, delivery and Clubcard pricing.",
        type: "company",
      },
      {
        name: "Sainsbury's",
        url: "https://www.sainsburys.co.uk/",
        description: "Supermarket with stores, delivery and Nectar offers.",
        type: "company",
      },
      {
        name: "Asda",
        url: "https://www.asda.com/",
        description: "Supermarket for groceries, home items and delivery.",
        type: "company",
      },
      {
        name: "Morrisons",
        url: "https://groceries.morrisons.com/",
        description: "Supermarket groceries and delivery.",
        type: "company",
      },
      {
        name: "Iceland",
        url: "https://www.iceland.co.uk/",
        description: "Frozen food, groceries and home delivery.",
        type: "company",
      },
      {
        name: "Ocado",
        url: "https://www.ocado.com/",
        description: "Online grocery delivery.",
        type: "company",
      },
      {
        name: "Aldi",
        url: "https://www.aldi.co.uk/",
        description: "Budget supermarket with strong weekly value items.",
        type: "company",
      },
      {
        name: "Lidl",
        url: "https://www.lidl.co.uk/",
        description: "Budget supermarket with app-based offers through Lidl Plus.",
        type: "company",
      }
    ]
  },
  {
    title: "Travel, Taxis And Local Transport",
    intro:
      "The UK is manageable once you understand local buses, trains, ride apps and city-specific travel cards.",
    guidance: [
      "For taxis, use licensed apps or reputable local minicab companies. In a new city, ask your university, employer or local council which operators are licensed.",
      "Always check vehicle registration, driver details and route before getting in. Share trip status at night.",
      "Train prices change, so compare advance tickets, railcards and off-peak timing.",
      "In London, learn Oyster/contactless, Tube zones, buses, night travel, ULEZ and congestion-charge basics before driving or renting."
    ],
    links: [
      {
        name: "Uber UK",
        url: "https://www.uber.com/gb/en/",
        description: "Ride-hailing app available in many UK cities.",
        type: "company",
      },
      {
        name: "Bolt UK",
        url: "https://bolt.eu/en-gb/",
        description: "Ride-hailing app available in selected UK cities.",
        type: "company",
      },
      {
        name: "FREENOW UK",
        url: "https://www.free-now.com/uk/",
        description: "Taxi and private-hire app in selected UK cities.",
        type: "company",
      },
      {
        name: "Gett",
        url: "https://gett.com/uk/",
        description: "Black cab and business travel booking in selected locations.",
        type: "company",
      },
      {
        name: "Addison Lee",
        url: "https://www.addisonlee.com/",
        description: "London-focused private-hire and courier service.",
        type: "company",
      },
      {
        name: "National Rail",
        url: "https://www.nationalrail.co.uk/",
        description: "Official rail journey planning and train information.",
        type: "official"
      },
      {
        name: "Trainline",
        url: "https://www.thetrainline.com/",
        description: "Train and coach ticket comparison and booking.",
        type: "company",
      },
      {
        name: "TfL",
        url: "https://tfl.gov.uk/",
        description: "London transport, Oyster, contactless travel and journey planning.",
        type: "official"
      }
    ]
  },
  {
    title: "Part-Time Work, CV And Confidence",
    intro:
      "Finding work can take time. The students who prepare earlier usually feel less pressure after arrival.",
    guidance: [
      "Understand your visa work conditions before applying. Employers may ask for share codes, NI number, address and bank details.",
      "Make a UK-style one-page CV for part-time roles and a separate CV for professional or placement roles.",
      "Apply consistently, but do not panic if the first few weeks are slow. Confidence improves after small conversations, interviews and local experience.",
      "Be cautious of job scams that ask you to pay for training, send money, receive parcels, move funds or share banking details."
    ],
    links: [
      {
        name: "Indeed UK",
        url: "https://uk.indeed.com/",
        description: "Job search for part-time, full-time and local roles.",
        type: "company",
      },
      {
        name: "LinkedIn Jobs",
        url: "https://www.linkedin.com/jobs/",
        description: "Professional jobs, networking and employer research.",
        type: "company",
      },
      {
        name: "Reed",
        url: "https://www.reed.co.uk/",
        description: "UK job board and courses platform.",
        type: "company",
      },
      {
        name: "Totaljobs",
        url: "https://www.totaljobs.com/",
        description: "UK jobs board for varied sectors.",
        type: "company",
      },
      {
        name: "CV-Library",
        url: "https://www.cv-library.co.uk/",
        description: "UK job board and CV upload platform.",
        type: "company",
      },
      {
        name: "StudentJob UK",
        url: "https://www.studentjob.co.uk/",
        description: "Student-focused part-time and graduate job listings.",
        type: "company",
      },
      {
        name: "The Caterer",
        url: "https://www.thecaterer.com/jobs",
        description: "Hospitality and catering roles, often useful for part-time searches.",
        type: "company",
      }
    ]
  },
  {
    title: "Renting A Car, Renting A Van And Buying A Car",
    intro:
      "Driving can be useful outside major cities, but the UK has strict rules, insurance expectations and expensive mistakes if you rush.",
    guidance: [
      "For rentals, check licence eligibility, age limits, deposit, excess, mileage, fuel policy, insurance cover and whether you need a credit card.",
      "For vans, measure furniture first, choose the right van size and check loading restrictions, parking and congestion or clean-air zones.",
      "Before buying a car, check MOT history, service records, insurance quote, road tax, mileage, finance outstanding, accident history and seller identity.",
      "Do not buy a car from Facebook Marketplace or Gumtree without checking documents, meeting safely and verifying ownership. A cheap car can become expensive quickly."
    ],
    links: [
      {
        name: "Enterprise",
        url: "https://www.enterprise.co.uk/",
        description: "Car and van rental across the UK.",
        type: "company",
      },
      {
        name: "Europcar",
        url: "https://www.europcar.co.uk/",
        description: "Car and van rental provider.",
        type: "company",
      },
      {
        name: "Hertz UK",
        url: "https://www.hertz.co.uk/",
        description: "Car rental provider.",
        type: "company",
      },
      {
        name: "SIXT UK",
        url: "https://www.sixt.co.uk/",
        description: "Car and van rental provider.",
        type: "company",
      },
      {
        name: "Zipcar UK",
        url: "https://www.zipcar.com/en-gb",
        description: "Car sharing in selected UK cities.",
        type: "company",
      },
      {
        name: "Apply for a provisional driving licence",
        url: "https://www.gov.uk/apply-first-provisional-driving-licence",
        description: "Official GOV.UK route for first provisional licence applications.",
        type: "official"
      },
      {
        name: "Auto Trader",
        url: "https://www.autotrader.co.uk/",
        description: "Major UK marketplace for used and new cars.",
        type: "marketplace",
      },
      {
        name: "Motors",
        url: "https://www.motors.co.uk/",
        description: "Car marketplace for used and new vehicles.",
        type: "marketplace",
      },
      {
        name: "Cinch",
        url: "https://www.cinch.co.uk/",
        description: "Online used-car buying platform.",
        type: "company",
      },
      {
        name: "Check MOT history",
        url: "https://www.gov.uk/check-mot-history",
        description: "Official MOT history lookup before buying a used vehicle.",
        type: "official"
      },
      {
        name: "Vehicle tax",
        url: "https://www.gov.uk/vehicle-tax",
        description: "Official service for taxing a vehicle.",
        type: "official"
      },
      {
        name: "Compare the Market car insurance",
        url: "https://www.comparethemarket.com/car-insurance/",
        description: "Car insurance comparison site.",
        type: "company",
      },
      {
        name: "MoneySuperMarket car insurance",
        url: "https://www.moneysupermarket.com/car-insurance/",
        description: "Car insurance comparison site.",
        type: "company",
      },
      {
        name: "Confused.com car insurance",
        url: "https://www.confused.com/car-insurance",
        description: "Car insurance comparison site.",
        type: "company",
      }
    ]
  },
  {
    title: "Student Discounts, Coupons And Everyday Savings",
    intro:
      "The UK rewards people who compare prices. Small savings on groceries, travel, phone plans and clothing add up quickly.",
    guidance: [
      "Register for student discount platforms if you are eligible, then compare against cashback and voucher sites before buying.",
      "Use supermarket loyalty cards because many prices are cheaper only for members.",
      "Track subscriptions. A few forgotten trials can quietly damage your monthly budget.",
      "Discounts are useful only if you were already planning to buy the item."
    ],
    links: [
      {
        name: "UNiDAYS",
        url: "https://www.myunidays.com/GB/en-GB",
        description: "Student discount platform for eligible students.",
        type: "discount",
      },
      {
        name: "Student Beans",
        url: "https://www.studentbeans.com/uk",
        description: "Student discounts and offers.",
        type: "discount",
      },
      {
        name: "TOTUM",
        url: "https://www.totum.com/",
        description: "Student discount card and offers platform.",
        type: "discount",
      },
      {
        name: "VoucherCodes",
        url: "https://www.vouchercodes.co.uk/",
        description: "Voucher codes and retail offers.",
        type: "discount",
      },
      {
        name: "TopCashback",
        url: "https://www.topcashback.co.uk/",
        description: "Cashback platform for eligible purchases.",
        type: "discount",
      },
      {
        name: "Quidco",
        url: "https://www.quidco.com/",
        description: "Cashback and voucher platform.",
        type: "discount",
      },
      {
        name: "HotUKDeals",
        url: "https://www.hotukdeals.com/",
        description: "Community deal-sharing site for UK offers.",
        type: "community",
      },
      {
        name: "Groupon UK",
        url: "https://www.groupon.co.uk/",
        description: "Local deals, experiences and discounts.",
        type: "discount",
      },
      {
        name: "Too Good To Go",
        url: "https://www.toogoodtogo.com/en-gb",
        description: "Discounted surplus food bags from shops and restaurants.",
        type: "discount",
      },
      {
        name: "Tesco Clubcard",
        url: "https://www.tesco.com/clubcard",
        description: "Tesco loyalty card and member pricing.",
        type: "discount",
      },
      {
        name: "Nectar",
        url: "https://www.nectar.com/",
        description: "Loyalty points used with Sainsbury's and partner brands.",
        type: "discount",
      },
      {
        name: "Lidl Plus",
        url: "https://www.lidl.co.uk/c/lidl-plus/s10010083",
        description: "Lidl app with coupons, rewards and digital receipts.",
        type: "discount",
      },
      {
        name: "Asda Rewards",
        url: "https://www.asda.com/rewards",
        description: "Asda loyalty app and rewards.",
        type: "discount",
      },
      {
        name: "Morrisons More",
        url: "https://www.morrisons.com/more/",
        description: "Morrisons loyalty scheme and offers.",
        type: "discount",
      }
    ]
  },
  {
    title: "Safety, Scams And Emotional Strength",
    intro:
      "Moving alone can make even confident people feel small for a while. That does not mean you made the wrong decision. It means you are adjusting.",
    guidance: [
      "Homesickness often comes in waves. Build a routine: cook, walk, attend class, call home, meet one person, apply for one thing, rest.",
      "Do not isolate yourself when something goes wrong. Speak to university support, trusted friends, GP, community groups or Idol for practical direction.",
      "Scams often create urgency: pay now, send deposit now, share OTP now, job starts today, room will be gone today. Slow down.",
      "Report fraud through the current UK reporting service and keep evidence such as screenshots, bank details, phone numbers and listing URLs."
    ],
    links: [
      {
        name: "Report Fraud",
        url: "https://www.reportfraud.police.uk/",
        description: "UK reporting service for fraud and cyber crime.",
        type: "official"
      },
      {
        name: "Citizens Advice scams guidance",
        url: "https://www.citizensadvice.org.uk/consumer/scams/scams/",
        description: "Practical advice on recognizing and responding to scams.",
        type: "official"
      },
      {
        name: "Samaritans",
        url: "https://www.samaritans.org/",
        description: "Emotional support charity for people who need someone to talk to.",
        type: "community"
      },
      {
        name: "Meetup",
        url: "https://www.meetup.com/",
        description: "Find local interest groups and community events.",
        type: "community",
      },
      {
        name: "Eventbrite UK",
        url: "https://www.eventbrite.co.uk/",
        description: "Local events, networking sessions and student-friendly meetups.",
        type: "community",
      }
    ]
  }
];
