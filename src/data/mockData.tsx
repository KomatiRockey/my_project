import React from 'react';
// Mock data for train allocation and status
export const mockTrainData = [{
  id: 'KM-01',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 24,
  jobCardStatus: 'None',
  mileage: 48320,
  cleaningStatus: 'Complete',
  bayPosition: 'Bay 1',
  branding: 'Festival Week'
}, {
  id: 'KM-02',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 18,
  jobCardStatus: 'None',
  mileage: 52140,
  cleaningStatus: 'Complete',
  bayPosition: 'Bay 2',
  branding: null
}, {
  id: 'KM-03',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 5,
  jobCardStatus: 'Pending',
  mileage: 49870,
  cleaningStatus: 'Scheduled',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-04',
  status: 'In Service',
  recommendation: 'Standby',
  fitnessCertificate: 12,
  jobCardStatus: 'None',
  mileage: 51230,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-05',
  status: 'Standby',
  recommendation: 'Service',
  fitnessCertificate: 30,
  jobCardStatus: 'None',
  mileage: 47890,
  cleaningStatus: 'Scheduled',
  bayPosition: 'Bay 3',
  branding: null
}, {
  id: 'KM-06',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 28,
  jobCardStatus: 'None',
  mileage: 50230,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-07',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 22,
  jobCardStatus: 'None',
  mileage: 49120,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: 'Festival Week'
}, {
  id: 'KM-08',
  status: 'Maintenance',
  recommendation: 'Maintenance',
  fitnessCertificate: 2,
  jobCardStatus: 'Urgent',
  mileage: 53450,
  cleaningStatus: 'Overdue',
  bayPosition: 'Bay 4',
  branding: null
}, {
  id: 'KM-09',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 15,
  jobCardStatus: 'None',
  mileage: 48760,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-10',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 20,
  jobCardStatus: 'None',
  mileage: 50980,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: 'Festival Week'
}, {
  id: 'KM-11',
  status: 'Standby',
  recommendation: 'Standby',
  fitnessCertificate: 9,
  jobCardStatus: 'Pending',
  mileage: 52340,
  cleaningStatus: 'Scheduled',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-12',
  status: 'In Service',
  recommendation: 'Maintenance',
  fitnessCertificate: 4,
  jobCardStatus: 'Urgent',
  mileage: 54120,
  cleaningStatus: 'Overdue',
  bayPosition: 'Bay 3',
  branding: 'Festival Week'
}, {
  id: 'KM-13',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 26,
  jobCardStatus: 'None',
  mileage: 47320,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-14',
  status: 'Maintenance',
  recommendation: 'Maintenance',
  fitnessCertificate: 1,
  jobCardStatus: 'Urgent',
  mileage: 53980,
  cleaningStatus: 'Scheduled',
  bayPosition: 'Bay 5',
  branding: null
}, {
  id: 'KM-15',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 19,
  jobCardStatus: 'None',
  mileage: 49650,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-16',
  status: 'In Service',
  recommendation: 'Standby',
  fitnessCertificate: 14,
  jobCardStatus: 'None',
  mileage: 51870,
  cleaningStatus: 'Scheduled',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-17',
  status: 'Standby',
  recommendation: 'Maintenance',
  fitnessCertificate: 6,
  jobCardStatus: 'Pending',
  mileage: 52780,
  cleaningStatus: 'Overdue',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-18',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 21,
  jobCardStatus: 'None',
  mileage: 48540,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-19',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 17,
  jobCardStatus: 'None',
  mileage: 50430,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-20',
  status: 'Maintenance',
  recommendation: 'Maintenance',
  fitnessCertificate: 3,
  jobCardStatus: 'Urgent',
  mileage: 53210,
  cleaningStatus: 'Scheduled',
  bayPosition: 'Bay 6',
  branding: null
}, {
  id: 'KM-21',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 25,
  jobCardStatus: 'None',
  mileage: 47890,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-22',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 16,
  jobCardStatus: 'None',
  mileage: 51120,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-23',
  status: 'Standby',
  recommendation: 'Standby',
  fitnessCertificate: 11,
  jobCardStatus: 'Pending',
  mileage: 52450,
  cleaningStatus: 'Scheduled',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-24',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 23,
  jobCardStatus: 'None',
  mileage: 48760,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}, {
  id: 'KM-25',
  status: 'In Service',
  recommendation: 'Service',
  fitnessCertificate: 27,
  jobCardStatus: 'None',
  mileage: 49320,
  cleaningStatus: 'Complete',
  bayPosition: null,
  branding: null
}];