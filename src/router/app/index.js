
export default {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['src/home/Home.vue'], resolve),
    },
    {
      path: '/careers',
      name: 'Careers',
      component: resolve => require(['src/home/careers/index.vue'], resolve),
    },
    {
      path: '/team',
      name: 'Our Team',
      component: resolve => require(['src/home/OurTeam.vue'], resolve),
    },
    {
      path: '/stories',
      name: 'Our Stories',
      component: resolve => require(['src/home/stories/index.vue'], resolve),
    },
    {
      path: '/stories/page/:title',
      name: 'StoryContent',
      component: resolve => require(['src/home/stories/content.vue'], resolve),
    },
    {
      path: '/case-studies',
      name: 'Case Studies',
      component: resolve => require(['src/home/AllCaseStudies.vue'], resolve),
    },
    {
      path: '/our-projects',
      name: 'Our Projects',
      component: resolve => require(['src/home/AllProjects.vue'], resolve),
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: resolve => require(['src/home/AllTechnologies.vue'], resolve),
    },
    {
      path: '/send-request',
      name: 'Send Request',
      component: resolve => require(['src/home/SendRequest.vue'], resolve),
    },
    {
      path: '/case-studies/booking-bot',
      name: 'Booking Bot',
      component: resolve => require(['src/home/case-studies/BookingBot.vue'], resolve),
    },
    {
      path: '/case-studies/bookings-and-appointments',
      name: 'Bookings And Appointments',
      component: resolve => require(['src/home/case-studies/BookingsAndAppointments.vue'], resolve),
    },
    {
      path: '/case-studies/company-profiling',
      name: 'Company Profiling',
      component: resolve => require(['src/home/case-studies/CompanyProfiling.vue'], resolve),
    },
    {
      path: '/case-studies/delivery-app',
      name: 'Delivery Application',
      component: resolve => require(['src/home/case-studies/DeliveryApp.vue'], resolve),
    },
    {
      path: '/case-studies/e-commerce',
      name: 'E-commerce',
      component: resolve => require(['src/home/case-studies/E-commerce.vue'], resolve),
    },
    {
      path: '/case-studies/employee-management-system',
      name: 'Employee Management System',
      component: resolve => require(['src/home/case-studies/EmployeeManagement.vue'], resolve),
    },
    {
      path: '/case-studies/hotel-management-system',
      name: 'Hotel Management System',
      component: resolve => require(['src/home/case-studies/HotelManagement.vue'], resolve),
    },
    {
      path: '/case-studies/inventory-management-system',
      name: 'Inventory Management System',
      component: resolve => require(['src/home/case-studies/InventoryManagement.vue'], resolve),
    },
    {
      path: '/case-studies/learning-system',
      name: 'Learning System',
      component: resolve => require(['src/home/case-studies/LearningSystem.vue'], resolve),
    },
    {
      path: '/case-studies/logbook-system',
      name: 'Logbook System',
      component: resolve => require(['src/home/case-studies/LogbookSystem.vue'], resolve),
    },
    {
      path: '/case-studies/manufacturing-management-system',
      name: 'Manufacturing Management System',
      component: resolve => require(['src/home/case-studies/ManufacturingManagement.vue'], resolve),
    },
    {
      path: '/case-studies/online-enrollment-system',
      name: 'Online Enrollment System',
      component: resolve => require(['src/home/case-studies/OnlineEnrollment.vue'], resolve),
    },
    {
      path: '/case-studies/payment-system',
      name: 'Payment System',
      component: resolve => require(['src/home/case-studies/PaymentSystem.vue'], resolve),
    },
    {
      path: '/case-studies/payroll-system',
      name: 'Payroll System',
      component: resolve => require(['src/home/case-studies/PayrollSystem.vue'], resolve),
    },
    {
      path: '/case-studies/real-estate',
      name: 'Real Estate',
      component: resolve => require(['src/home/case-studies/RealEstate.vue'], resolve),
    },
    {
      path: '/case-studies/rfid-system',
      name: 'RFID System',
      component: resolve => require(['src/home/case-studies/RFIDSystem.vue'], resolve),
    },
    {
      path: '/case-studies/translation-system',
      name: 'Translation System',
      component: resolve => require(['src/home/case-studies/Translation.vue'], resolve),
    },
    {
      path: '/case-studies/transportation-system',
      name: 'Transportation System',
      component: resolve => require(['src/home/case-studies/Transportation.vue'], resolve),
    }
  ]
}

