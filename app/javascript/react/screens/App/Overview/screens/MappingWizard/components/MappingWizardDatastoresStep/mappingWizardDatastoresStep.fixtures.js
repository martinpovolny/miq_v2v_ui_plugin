import Immutable from 'seamless-immutable';

// returns sample datastores for a single cluster
export const sourceClusterDatastores = [
  {
    href: 'http://localhost:3000/api/clusters/1',
    id: '1',
    name: 'VMWare Cluster 1',
    ems_id: '1',
    created_on: '2017-10-06T16:41:09Z',
    updated_on: '2018-01-20T23:12:00Z',
    uid_ems: 'domain-c7',
    ha_enabled: false,
    ha_admit_control: true,
    ha_max_failures: 1,
    drs_enabled: false,
    drs_automation_level: 'fullyAutomated',
    drs_migration_threshold: 3,
    last_perf_capture_on: null,
    ems_ref_obj: 'domain-c7',
    effective_cpu: 109356,
    effective_memory: 790163881984,
    ems_ref: 'domain-c7',
    type: null,
    storages: [
      {
        href: 'http://localhost:3000/api/data_stores/1',
        id: '1-1',
        name: 'VMWareCluster1-DS1',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 659643432960,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:34Z',
        multiplehostaccess: 0,
        location: '577d1849-e3cb89c2-3f7d-000e1eaade20',
        last_scan_on: '2018-01-21T00:00:38Z',
        uncommitted: 168363686283,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-11',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-11',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/2',
        id: '1-2',
        name: 'VMWareCluster1-DS2',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1109023260672,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:35Z',
        multiplehostaccess: 0,
        location: '3ac00f25-19a416be-56d6-000e1eaac6a0',
        last_scan_on: '2018-01-21T00:00:56Z',
        uncommitted: 63288031245,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-871',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-871',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/3',
        id: '1-3',
        name: 'VMWareCluster1-DS3',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1186027536384,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:36Z',
        multiplehostaccess: 0,
        location: '577d1843-d0171b28-3d58-000e1eaabf30',
        last_scan_on: '2018-01-21T00:00:46Z',
        uncommitted: 16220587058,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-845',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-845',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/4',
        id: '1-4',
        name: 'VMWareCluster1-DS4',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1186027536384,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:36Z',
        multiplehostaccess: 0,
        location: '577d1843-d0171b28-3d58-000e1eaabf30',
        last_scan_on: '2018-01-21T00:00:46Z',
        uncommitted: 16220587058,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-845',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-845',
        storage_domain_type: null
      }
    ]
  },
  {
    href: 'http://localhost:3000/api/clusters/2',
    id: '2',
    name: 'VMWare Cluster 2',
    ems_id: '1',
    created_on: '2017-10-06T16:41:09Z',
    updated_on: '2018-01-20T23:12:00Z',
    uid_ems: 'domain-c7',
    ha_enabled: false,
    ha_admit_control: true,
    ha_max_failures: 1,
    drs_enabled: false,
    drs_automation_level: 'fullyAutomated',
    drs_migration_threshold: 3,
    last_perf_capture_on: null,
    ems_ref_obj: 'domain-c7',
    effective_cpu: 109356,
    effective_memory: 790163881984,
    ems_ref: 'domain-c7',
    type: null,
    storages: [
      {
        href: 'http://localhost:3000/api/data_stores/5',
        id: '2-1',
        name: 'VMWareCluster2-DS1',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 659643432960,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:34Z',
        multiplehostaccess: 0,
        location: '577d1849-e3cb89c2-3f7d-000e1eaade20',
        last_scan_on: '2018-01-21T00:00:38Z',
        uncommitted: 168363686283,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-11',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-11',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/6',
        id: '2-2',
        name: 'VMWareCluster2-DS2',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1109023260672,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:35Z',
        multiplehostaccess: 0,
        location: '3ac00f25-19a416be-56d6-000e1eaac6a0',
        last_scan_on: '2018-01-21T00:00:56Z',
        uncommitted: 63288031245,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-871',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-871',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/7',
        id: '2-3',
        name: 'VMWareCluster2-DS3',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1186027536384,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:36Z',
        multiplehostaccess: 0,
        location: '577d1843-d0171b28-3d58-000e1eaabf30',
        last_scan_on: '2018-01-21T00:00:46Z',
        uncommitted: 16220587058,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-845',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-845',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/8',
        id: '2-4',
        name: 'VMWareCluster2-DS4',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1186027536384,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:36Z',
        multiplehostaccess: 0,
        location: '577d1843-d0171b28-3d58-000e1eaabf30',
        last_scan_on: '2018-01-21T00:00:46Z',
        uncommitted: 16220587058,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-845',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-845',
        storage_domain_type: null
      }
    ]
  },
  {
    href: 'http://localhost:3000/api/clusters/2',
    id: '3',
    name: 'VMWare Cluster 3',
    ems_id: '1',
    created_on: '2017-10-06T16:41:09Z',
    updated_on: '2018-01-20T23:12:00Z',
    uid_ems: 'domain-c7',
    ha_enabled: false,
    ha_admit_control: true,
    ha_max_failures: 1,
    drs_enabled: false,
    drs_automation_level: 'fullyAutomated',
    drs_migration_threshold: 3,
    last_perf_capture_on: null,
    ems_ref_obj: 'domain-c7',
    effective_cpu: 109356,
    effective_memory: 790163881984,
    ems_ref: 'domain-c7',
    type: null,
    storages: [
      {
        href: 'http://localhost:3000/api/data_stores/9',
        id: '3-1',
        name: 'VMWareCluster3-DS1',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 659643432960,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:34Z',
        multiplehostaccess: 0,
        location: '577d1849-e3cb89c2-3f7d-000e1eaade20',
        last_scan_on: '2018-01-21T00:00:38Z',
        uncommitted: 168363686283,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-11',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-11',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/10',
        id: '3-2',
        name: 'VMWareCluster3-DS2',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1109023260672,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:35Z',
        multiplehostaccess: 0,
        location: '3ac00f25-19a416be-56d6-000e1eaac6a0',
        last_scan_on: '2018-01-21T00:00:56Z',
        uncommitted: 63288031245,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-871',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-871',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/11',
        id: '3-3',
        name: 'VMWareCluster3-DS3',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1186027536384,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:36Z',
        multiplehostaccess: 0,
        location: '577d1843-d0171b28-3d58-000e1eaabf30',
        last_scan_on: '2018-01-21T00:00:46Z',
        uncommitted: 16220587058,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-845',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-845',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/12',
        id: '3-4',
        name: 'VMWareCluster3-DS4',
        store_type: 'VMFS',
        total_space: 1192121860096,
        free_space: 1186027536384,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:36Z',
        multiplehostaccess: 0,
        location: '577d1843-d0171b28-3d58-000e1eaabf30',
        last_scan_on: '2018-01-21T00:00:46Z',
        uncommitted: 16220587058,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-845',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: true,
        master: false,
        ems_ref: 'datastore-845',
        storage_domain_type: null
      }
    ]
  }
];

export const targetClusterDatastores = [
  {
    href: 'http://localhost:3000/api/clusters/1',
    id: '1',
    name: 'RHV-1',
    ems_id: '1',
    created_on: '2017-10-06T16:41:09Z',
    updated_on: '2018-01-20T23:12:00Z',
    uid_ems: 'domain-c7',
    ha_enabled: false,
    ha_admit_control: true,
    ha_max_failures: 1,
    drs_enabled: false,
    drs_automation_level: 'fullyAutomated',
    drs_migration_threshold: 3,
    last_perf_capture_on: null,
    ems_ref_obj: 'domain-c7',
    effective_cpu: 109356,
    effective_memory: 790163881984,
    ems_ref: 'domain-c7',
    type: null,
    storages: [
      {
        href: 'http://localhost:3000/api/data_stores/13',
        id: '1-1',
        name: 'RHVCluster1-Shared-NFS-1',
        store_type: 'NFS41',
        total_space: 5388852264960,
        free_space: 3389349027840,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:38Z',
        multiplehostaccess: 1,
        location: 'a0f0178e-ddec1f02-0000-000000000000',
        last_scan_on: '2018-01-21T00:05:45Z',
        uncommitted: 3917934592000,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-874',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: false,
        master: false,
        ems_ref: 'datastore-874',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/14',
        id: '1-2',
        name: 'RHVCluster1-Shared-NFS-2',
        store_type: 'NFS41',
        total_space: 5388852264960,
        free_space: 3389349027840,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:38Z',
        multiplehostaccess: 1,
        location: 'a0f0178e-ddec1f02-0000-000000000000',
        last_scan_on: '2018-01-21T00:05:45Z',
        uncommitted: 3917934592000,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-874',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: false,
        master: false,
        ems_ref: 'datastore-874',
        storage_domain_type: null
      }
    ]
  },
  {
    href: 'http://localhost:3000/api/clusters/1',
    id: '2',
    name: 'RHV-2',
    ems_id: '1',
    created_on: '2017-10-06T16:41:09Z',
    updated_on: '2018-01-20T23:12:00Z',
    uid_ems: 'domain-c7',
    ha_enabled: false,
    ha_admit_control: true,
    ha_max_failures: 1,
    drs_enabled: false,
    drs_automation_level: 'fullyAutomated',
    drs_migration_threshold: 3,
    last_perf_capture_on: null,
    ems_ref_obj: 'domain-c7',
    effective_cpu: 109356,
    effective_memory: 790163881984,
    ems_ref: 'domain-c7',
    type: null,
    storages: [
      {
        href: 'http://localhost:3000/api/data_stores/15',
        id: '2-1',
        name: 'RHVCluster2-Shared-NFS-1',
        store_type: 'NFS41',
        total_space: 5388852264960,
        free_space: 3389349027840,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:38Z',
        multiplehostaccess: 1,
        location: 'a0f0178e-ddec1f02-0000-000000000000',
        last_scan_on: '2018-01-21T00:05:45Z',
        uncommitted: 3917934592000,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-874',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: false,
        master: false,
        ems_ref: 'datastore-874',
        storage_domain_type: null
      },
      {
        href: 'http://localhost:3000/api/data_stores/16',
        id: '2-2',
        name: 'RHVCluster2-Shared-NFS-2',
        store_type: 'NFS41',
        total_space: 5388852264960,
        free_space: 3389349027840,
        created_on: '2017-10-06T16:41:09Z',
        updated_on: '2018-01-21T01:02:38Z',
        multiplehostaccess: 1,
        location: 'a0f0178e-ddec1f02-0000-000000000000',
        last_scan_on: '2018-01-21T00:05:45Z',
        uncommitted: 3917934592000,
        last_perf_capture_on: '2018-01-21T01:00:00Z',
        ems_ref_obj: 'datastore-874',
        directory_hierarchy_supported: true,
        thin_provisioning_supported: true,
        raw_disk_mappings_supported: false,
        master: false,
        ems_ref: 'datastore-874',
        storage_domain_type: null
      }
    ]
  }
];

export const requestSourceDatastoresData = id => ({
  method: 'GET',
  response: { data: sourceClusterDatastores[id - 1] }
});

export const requestTargetDatastoresData = id => ({
  method: 'GET',
  response: { data: targetClusterDatastores[id - 1] }
});

export const initialState = Immutable({
  sourceClusterDatastores: {},
  targetClusterDatastores: {},
  fetchDatastoresUrl: '/api/dummyClusters'
});
