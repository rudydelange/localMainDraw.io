(function()
{
	// Adds mockup shapes
	Sidebar.prototype.addVeeamPalette = function()
	{
		this.addVeeam2DPalette();
		this.addVeeam3DPalette();
	};
	
	Sidebar.prototype.addVeeam2DPalette = function()
	{
		var sn = 'shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shape=mxgraph.veeam.2d.';
		var s = 'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shape=mxgraph.veeam.2d.';
		var s2 = 'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shape=mxgraph.veeam.2d.';

		// Space savers
		var sb = this;
		var gn = 'mxgraph.veeam.2d';
		var dt = 'veeam 2d two dimension vmware virtual machine ';
		
		var w = 2.0;
		var h = 2.0;
		
		var fns =
		[
			this.createVertexTemplateEntry(s + '1ftvm;',
					w * 35, h * 35, '', '1FTVM', null, null, this.getTagsForStencil(gn, '1ftvm', dt).join(' ')),
			this.createVertexTemplateEntry(s + '1ftvm_error;',
					w * 35, h * 39, '', '1FTVM Error', null, null, this.getTagsForStencil(gn, '1ftvm error', dt).join(' ')),
			this.createVertexTemplateEntry(s + '1ftvm_running;',
					w * 35, h * 39, '', '1FTVM Running', null, null, this.getTagsForStencil(gn, '1frvm running', dt).join(' ')),
			this.createVertexTemplateEntry(s + '1ftvm_unavailable;',
					w * 35, h * 39, '', '1FTVM Unavailable', null, null, this.getTagsForStencil(gn, '1ftvm unavailable', dt).join(' ')),
			this.createVertexTemplateEntry(s + '1ftvm_warning;',
					w * 35, h * 39, '', '1FTVM Warning', null, null, this.getTagsForStencil(gn, '1ftvm warning', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + '1_click_failover_orchestration;',
					w * 22, h * 22, '', '1 Click Failover Orchestration', null, null, this.getTagsForStencil(gn, 'one click failover orchestration', dt).join(' ')),
			this.createVertexTemplateEntry(s + '2ftvm;',
					w * 35, h * 35, '', '2FTVM', null, null, this.getTagsForStencil(gn, '2ftvm', dt).join(' ')),
			this.createVertexTemplateEntry(s + '2ftvm_error;',
					w * 35, h * 39, '', '2FTVM Error', null, null, this.getTagsForStencil(gn, '2ftvm error', dt).join(' ')),
			this.createVertexTemplateEntry(s + '2ftvm_running;',
					w * 35, h * 39, '', '2FTVM Running', null, null, this.getTagsForStencil(gn, '2ftvm running', dt).join(' ')),
			this.createVertexTemplateEntry(s + '2ftvm_unavailable;',
					w * 35, h * 39, '', '2FTVM Unavailable', null, null, this.getTagsForStencil(gn, '2ftvm unavailable', dt).join(' ')),
			this.createVertexTemplateEntry(s + '2ftvm_warning;',
					w * 35, h * 39, '', '2FTVM Warning', null, null, this.getTagsForStencil(gn, '2ftvm warning', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'agent;',
					w * 19, h * 19, '', 'Agent', null, null, this.getTagsForStencil(gn, 'agent', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'alarm;',
					w * 31, h * 23, '', 'Alarm', null, null, this.getTagsForStencil(gn, 'alarm', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'alert;',
					w * 15, h * 15, '', 'Alert', null, null, this.getTagsForStencil(gn, 'alert', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'assisted_failover_and_failback;',
					w * 23, h * 23, '', 'Assisted Failover and Failback', null, null, this.getTagsForStencil(gn, 'assisted failover and failback', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'backup_browser;',
					w * 23, h * 23, '', 'Backup Browser', null, null, this.getTagsForStencil(gn, 'backup browser', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'backup_from_storage_snapshots;',
					w * 23, h * 23, '', 'Backup from Storage Snapshots', null, null, this.getTagsForStencil(gn, 'backup from storage snapshots', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'backup_repository;',
					w * 26, h * 24, '', 'Backup Repository', null, null, this.getTagsForStencil(gn, 'backup repository', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'backup_repository_2;',
					w * 29, h * 25, '', 'Backup Repository', null, null, this.getTagsForStencil(gn, 'backup repository', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'built_in_wan_acceleration;',
					w * 23, h * 23, '', 'Built-in WAN Acceleration', null, null, this.getTagsForStencil(gn, 'built in wan acceleration wireless area network', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cd;',
					w * 23, h * 23, '', 'CD', null, null, this.getTagsForStencil(gn, 'cd compact disc', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cloud;',
					w * 33, h * 23, '', 'Cloud', null, null, this.getTagsForStencil(gn, 'cloud', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'cloud_gateway;',
					w * 23, h * 23, '', 'Cloud Gateway', null, null, this.getTagsForStencil(gn, 'cloud gateway', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'database;',
					w * 29, h * 25, '', 'Database', null, null, this.getTagsForStencil(gn, 'database db', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'datastore;',
					w * 22, h * 22, '', 'Datastore', null, null, this.getTagsForStencil(gn, 'datastore', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'datastore_snapshot;',
					w * 23, h * 6, '', 'Datastore Snapshot', null, null, this.getTagsForStencil(gn, 'datastore snapshot', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'datastore_volume;',
					w * 23, h * 6, '', 'Datastore Volume', null, null, this.getTagsForStencil(gn, 'datastore volume', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'data_mover;',
					w * 19, h * 19, '', 'Data Mover', null, null, this.getTagsForStencil(gn, 'data mover', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'disaster_recovery;',
					w * 23, h * 23, '', 'Disaster Recovery', null, null, this.getTagsForStencil(gn, 'disaster recovery', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'download;',
					w * 23, h * 23, '', 'Download', null, null, this.getTagsForStencil(gn, 'download', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'emc_data_domain_boost;',
					w * 23, h * 23, '', 'EMC Data Domain Boost', null, null, this.getTagsForStencil(gn, 'emc data domain boost', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'encryption_object;',
					w * 23, h * 23, '', 'Encryption Object', null, null, this.getTagsForStencil(gn, 'encryption object', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'end_to_end_encryption;',
					w * 23, h * 23, '', 'End to end Encryption', null, null, this.getTagsForStencil(gn, 'end to end encryption', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'esx_esxi;',
					w * 15, h * 23, '', 'ESX/ESXi', null, null, this.getTagsForStencil(gn, 'esx esxi', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'exagrid;',
					w * 23, h * 23, '', 'ExaGrid', null, null, this.getTagsForStencil(gn, 'exagrid', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'failover_protective_snapshot;',
					w * 23, h * 23, '', 'Failover Protective Snapshot', null, null, this.getTagsForStencil(gn, 'failover protective snapshot', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'failover_protective_snapshot_locked;',
					w * 27, h * 25, '', 'Failover Protective Snapshot Locked', null, null, this.getTagsForStencil(gn, 'failover protective snapshot locked', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'failover_protective_snapshot_running;',
					w * 28, h * 25, '', 'Failover Protective Snapshot Running', null, null, this.getTagsForStencil(gn, 'failover protective snapshot running', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'file;',
					w * 17, h * 23, '', 'File', null, null, this.getTagsForStencil(gn, 'file', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'file_system_browser;',
					w * 23, h * 23, '', 'File System Browser', null, null, this.getTagsForStencil(gn, 'file system browser', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'folder;',
					w * 24, h * 23, '', 'Folder', null, null, this.getTagsForStencil(gn, 'folder', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'forward_incremental_backup_increment;fillColor=#999A98;',
					w * 17, h * 12, '', 'Forward Incremental Backup - Increment (grey)', null, null, this.getTagsForStencil(gn, 'forward incremental backup increment', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'forward_incremental_backup_increment;',
					w * 17, h * 12, '', 'Forward Incremental Backup - Increment (blue)', null, null, this.getTagsForStencil(gn, 'forward incremental backup increment', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'free_datastore;',
					w * 23, h * 23, '', 'Free Datastore', null, null, this.getTagsForStencil(gn, 'free datastore', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'full_datastore;',
					w * 23, h * 23, '', 'Full Datastore', null, null, this.getTagsForStencil(gn, 'full datastore', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'full_veeam_backup;fillColor=#999A98;',
					w * 13, h * 21, '', 'Full Veeam Backup (grey)', null, null, this.getTagsForStencil(gn, 'full veeam backup', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'full_veeam_backup;fillColor=#24B14B;',
					w * 13, h * 21, '', 'Full Veeam Backup (green)', null, null, this.getTagsForStencil(gn, 'full veeam backup', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'full_veeam_backup;fillColor=#EF8F21;',
					w * 13, h * 21, '', 'Full Veeam Backup (orange)', null, null, this.getTagsForStencil(gn, 'full veeam backup', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'full_veeam_backup;fillColor=#FBB715;',
					w * 13, h * 21, '', 'Full Veeam Backup (yellow)', null, null, this.getTagsForStencil(gn, 'full veeam backup', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'group;',
					w * 20, h * 23, '', 'Group', null, null, this.getTagsForStencil(gn, 'group', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'hard_drive;',
					w * 19, h * 23, '', 'Hard Drive', null, null, this.getTagsForStencil(gn, 'hard drive', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'hp_storeonce;',
					w * 23, h * 23, '', 'HP StoreOnce', null, null, this.getTagsForStencil(gn, 'hp storeonce', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'hyper_v_host;',
					w * 62, h * 60, '', 'Hyper-V Host', null, null, this.getTagsForStencil(gn, 'hyper host', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'hyper_v_vmware_host;',
					w * 62, h * 60, '', 'VMware/Hyper-V Host', null, null, this.getTagsForStencil(gn, 'hyper vmware host', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'letter;',
					w * 23, h * 18, '', 'Letter', null, null, this.getTagsForStencil(gn, 'letter', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'license;',
					w * 23, h * 23, '', 'License', null, null, this.getTagsForStencil(gn, 'license', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'lost_space;',
					w * 23, h * 23, '', 'Lost Space', null, null, this.getTagsForStencil(gn, 'lost space', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'lun;',
					w * 29, h * 11, '', 'LUN', null, null, this.getTagsForStencil(gn, 'lun', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'medium_datastore;',
					w * 23, h * 23, '', 'Medium Datastore', null, null, this.getTagsForStencil(gn, 'medium datastore', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'monitoring_console;',
					w * 23, h * 23, '', 'Monitoring Console', null, null, this.getTagsForStencil(gn, 'monitoring console', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'native_tape_support;',
					w * 23, h * 23, '', 'Native Tape Support', null, null, this.getTagsForStencil(gn, 'native tape support', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'network_card;',
					w * 23, h * 16, '', 'Network Card', null, null, this.getTagsForStencil(gn, 'network card', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'on_demand_sandbox;',
					w * 23, h * 23, '', 'On Demand Sandbox', null, null, this.getTagsForStencil(gn, 'on demand sandbox', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'physical_storage;',
					w * 38, h * 13, '', 'Physical Storage', null, null, this.getTagsForStencil(gn, 'physical storage', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'powershell_extension;',
					w * 23, h * 23, '', 'PowerShell Extension', null, null, this.getTagsForStencil(gn, 'powershell extension', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'private_key;',
					w * 28, h * 26, '', 'Private Key', null, null, this.getTagsForStencil(gn, 'private key', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'privilege;',
					w * 25, h * 24, '', 'Privilege', null, null, this.getTagsForStencil(gn, 'privilege', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'proxy;',
					w * 23, h * 23, '', 'Proxy', null, null, this.getTagsForStencil(gn, 'proxy', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'proxy_appliance;',
					w * 23, h * 23, '', 'Proxy Appliance', null, null, this.getTagsForStencil(gn, 'proxy appliance', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'quick_migration;',
					w * 23, h * 23, '', 'Quick Migration', null, null, this.getTagsForStencil(gn, 'quick migration', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'remote_site;',
					w * 21, h * 22, '', 'Remote Site', null, null, this.getTagsForStencil(gn, 'remote site', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'remote_storage;',
					w * 23, h * 23, '', 'Remote Storage', null, null, this.getTagsForStencil(gn, 'remote storage', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'replication_from_a_backup;',
					w * 23, h * 23, '', 'Replication from a Backup', null, null, this.getTagsForStencil(gn, 'replication from a backup', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'report;',
					w * 17, h * 23, '', 'Report', null, null, this.getTagsForStencil(gn, 'report', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'resource_pool;',
					w * 23, h * 23, '', 'Resource Pool', null, null, this.getTagsForStencil(gn, 'resource pool', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'restful_apis;',
					w * 23, h * 23, '', 'RESTful APIs', null, null, this.getTagsForStencil(gn, 'restful apis api', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'restore_data_from_the_vm_backup;',
					w * 23, h * 23, '', 'Restore Data from the VM Backup', null, null, this.getTagsForStencil(gn, 'restore data from the vm backup', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'reversed_incremental_backup_increment;fillColor=#999A98;',
					w * 17, h * 12, '', 'Reversed Incremental Backup - Increment (grey)', null, null, this.getTagsForStencil(gn, 'reversed incremental backup increment', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'reversed_incremental_backup_increment;fillColor=#6E5CA7;',
					w * 17, h * 12, '', 'Reversed Incremental Backup - Increment (purple)', null, null, this.getTagsForStencil(gn, 'reversed incremental backup increment', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'role;',
					w * 17, h * 23, '', 'Role', null, null, this.getTagsForStencil(gn, 'role', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'scheduled_backups;',
					w * 23, h * 23, '', 'Scheduled Backups', null, null, this.getTagsForStencil(gn, 'Scheduled Backups', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'search;',
					w * 23, h * 23, '', 'Search', null, null, this.getTagsForStencil(gn, 'search', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'self_service_recovery;',
					w * 23, h * 23, '', 'Self-Service Recovery', null, null, this.getTagsForStencil(gn, 'self service recovery', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'service;',
					w * 23, h * 23, '', 'Service', null, null, this.getTagsForStencil(gn, 'service', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'service_console;',
					w * 23, h * 23, '', 'Service Console', null, null, this.getTagsForStencil(gn, 'service console', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'service_vnic;',
					w * 30, h * 27, '', 'Service vNIC', null, null, this.getTagsForStencil(gn, 'service vnic', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'sure_backup;',
					w * 23, h * 23, '', 'SureBackup', null, null, this.getTagsForStencil(gn, 'sure backup', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'sure_replica;',
					w * 23, h * 23, '', 'SureReplica', null, null, this.getTagsForStencil(gn, 'sure replica', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'switch;',
					w * 37, h * 6, '', 'Switch', null, null, this.getTagsForStencil(gn, 'switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape;',
					w * 30, h * 16, '', 'Tape', null, null, this.getTagsForStencil(gn, 'tape', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_checked;',
					w * 35, h * 21, '', 'Tape Checked', null, null, this.getTagsForStencil(gn, 'tape checked', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_device;',
					w * 26, h * 26, '', 'Tape Device', null, null, this.getTagsForStencil(gn, 'tape device', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_ejecting;',
					w * 35, h * 21, '', 'Tape Ejecting', null, null, this.getTagsForStencil(gn, 'tape ejecting', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_library;',
					w * 20, h * 23, '', 'Tape Library', null, null, this.getTagsForStencil(gn, 'tape library', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_licensed;',
					w * 34, h * 19, '', 'Tape Licensed', null, null, this.getTagsForStencil(gn, 'tape licensed', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_recording;',
					w * 35, h * 21, '', 'Tape Recording', null, null, this.getTagsForStencil(gn, 'tape recording', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'tape_server;',
					w * 37, h * 36, '', 'Tape Server', null, null, this.getTagsForStencil(gn, 'tape server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'transport_service;',
					w * 19, h * 19, '', 'Transport Service', null, null, this.getTagsForStencil(gn, 'transport service', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'user;',
					w * 13, h * 23, '', 'User', null, null, this.getTagsForStencil(gn, 'user', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'u_air;',
					w * 23, h * 23, '', 'U-AIR', null, null, this.getTagsForStencil(gn, 'air', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vapp;',
					w * 24, h * 24, '', 'vApp', null, null, this.getTagsForStencil(gn, 'vapp', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vapp_started;',
					w * 30, h * 27, '', 'vApp Started', null, null, this.getTagsForStencil(gn, 'vapp started', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeamzip;',
					w * 23, h * 23, '', 'VeeamZIP', null, null, this.getTagsForStencil(gn, 'veeamzip zip', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_availability_suite;',
					w * 23, h * 23, '', 'Veeam Availability Suite', null, null, this.getTagsForStencil(gn, 'availability suite', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'veeam_backup_and_replication_server;',
					w * 37, h * 36, '', 'Veeam Backup and Replication Server', null, null, this.getTagsForStencil(gn, 'backup and replication server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'veeam_backup_enterprise_manager_server;',
					w * 37, h * 36, '', 'Veeam Backup Enterprise Manager Server', null, null, this.getTagsForStencil(gn, 'backup enterprise manager server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'veeam_backup_search_server;',
					w * 37, h * 36, '', 'Veeam Backup Search Server', null, null, this.getTagsForStencil(gn, 'backup search server', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'veeam_backup_shell;',
					w * 23, h * 23, '', 'Veeam Backup Shell', null, null, this.getTagsForStencil(gn, 'backup shell', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_cloud_connect;',
					w * 23, h * 23, '', 'Veeam Cloud Connect', null, null, this.getTagsForStencil(gn, 'cloud connect', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_explorer;',
					w * 23, h * 23, '', 'Veeam Explorer', null, null, this.getTagsForStencil(gn, 'explorer', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_explorer_for_active_directory;',
					w * 23, h * 23, '', 'Veeam Explorer for Active Directory', null, null, this.getTagsForStencil(gn, 'explorer for active directory', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_explorer_for_exchange;',
					w * 23, h * 23, '', 'Veeam Explorer for Exchange', null, null, this.getTagsForStencil(gn, 'explorer for exchange', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_explorer_for_sharepoint;',
					w * 23, h * 23, '', 'Veeam Explorer for SharePoint', null, null, this.getTagsForStencil(gn, 'explorer for sharepoint', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_explorer_for_sql;',
					w * 23, h * 23, '', 'Veeam Explorer for SQL', null, null, this.getTagsForStencil(gn, 'explorer for sql', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_logo;fillColor=#232020;',
					w * 72, h * 19, '', 'Veeam Logo', null, null, this.getTagsForStencil(gn, 'logo', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_one_business_view;',
					w * 23, h * 23, '', 'Veeam ONE Business View', null, null, this.getTagsForStencil(gn, 'one business view', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_one_monitor;',
					w * 23, h * 23, '', 'Veeam ONE Monitor', null, null, this.getTagsForStencil(gn, 'one monitor', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_one_reporter;',
					w * 23, h * 23, '', 'Veeam ONE Reporter', null, null, this.getTagsForStencil(gn, 'one reporter', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'veeam_one_server;',
					w * 23, h * 23, '', 'Veeam ONE Server', null, null, this.getTagsForStencil(gn, 'one server', dt).join(' ')),
			this.createVertexTemplateEntry(s2 + 'virtual_lab;',
					w * 23, h * 23, '', 'Virtual Lab', null, null, this.getTagsForStencil(gn, 'virtual lab', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtual_machine;',
					w * 23, h * 23, '', 'Virtual Machine', null, null, this.getTagsForStencil(gn, '', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'virtual_switch;',
					w * 23, h * 23, '', 'Virtual Switch', null, null, this.getTagsForStencil(gn, 'switch', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vmware_host;',
					w * 62, h * 60, '', 'VMware Host', null, null, this.getTagsForStencil(gn, 'vmware host', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_backup;',
					w * 25, h * 23, '', 'VM Backup', null, null, this.getTagsForStencil(gn, 'vm backup', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_failed;',
					w * 28, h * 27, '', 'VM Failed', null, null, this.getTagsForStencil(gn, 'vm failed', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_image_full_backup;',
					w * 19, h * 26, '', 'VM Image Full Backup', null, null, this.getTagsForStencil(gn, 'vm image full backup', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_image_incremental_backup;',
					w * 19, h * 26, '', 'VM Image Incremental Backup', null, null, this.getTagsForStencil(gn, 'vm image incremental backup', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_linux;',
					w * 23, h * 42, '', 'VM Linux', null, null, this.getTagsForStencil(gn, 'vm linux', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_locked;',
					w * 28, h * 26, '', 'VM Locked', null, null, this.getTagsForStencil(gn, 'vm locked', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_no_network;',
					w * 27, h * 26, '', 'VM No Network', null, null, this.getTagsForStencil(gn, 'vm no network', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_problem;',
					w * 28, h * 26, '', 'VM Problem', null, null, this.getTagsForStencil(gn, 'vm problem', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_running;',
					w * 28, h * 27, '', 'VM Running', null, null, this.getTagsForStencil(gn, 'vm running', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_saved_state;',
					w * 28, h * 27, '', 'VM Saved State', null, null, this.getTagsForStencil(gn, 'vm saved state', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vm_windows;',
					w * 23, h * 42, '', 'VM Windows', null, null, this.getTagsForStencil(gn, 'vm windows', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vnic;',
					w * 23, h * 23, '', 'vNIC', null, null, this.getTagsForStencil(gn, 'vnic', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'vsb_file;',
					w * 17, h * 23, '', '.vsb File', null, null, this.getTagsForStencil(gn, 'vsb file', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'wan_accelerator;',
					w * 23, h * 23, '', 'WAN Accelerator', null, null, this.getTagsForStencil(gn, 'wan accelerator wireless area network', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_console;',
					w * 23, h * 23, '', 'Web Console', null, null, this.getTagsForStencil(gn, 'web console', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'web_ui;',
					w * 23, h * 23, '', 'Web UI', null, null, this.getTagsForStencil(gn, 'web ui user interface', dt).join(' ')),
			this.createVertexTemplateEntry(s + 'workstation;',
					w * 34, h * 23, '', 'Workstation', null, null, this.getTagsForStencil(gn, 'workstation', dt).join(' '))
		];
			
		this.addPalette('veeam2D', 'Veeam / 2D', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};

	Sidebar.prototype.addVeeam3DPalette = function()
	{
		var sn = 'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shape=mxgraph.veeam.3d.';
		var s = 'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shape=mxgraph.veeam.3d.';
		var s2 = 'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shape=mxgraph.veeam.3d.';

		// Space savers
		var sb = this;
		var gn = 'mxgraph.veeam.3d';
		var dt = 'veeam 3d three dimension vmware virtual machine ';
		
		var w = 2.0;
		var h = 2.0;
		
		var fns =
		[
			this.createVertexTemplateEntry(sn + '1ftvm;',
					w * 34, h * 31, '', '1FTVM', null, null, this.getTagsForStencil(gn, '1ftvm', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '1ftvm_error;',
					w * 34, h * 31, '', '1FTVM Error', null, null, this.getTagsForStencil(gn, '1ftvm error', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '1ftvm_running;',
					w * 34, h * 31, '', '1FTVM Running', null, null, this.getTagsForStencil(gn, '1ftvm running', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '1ftvm_unavailable;',
					w * 34, h * 31, '', '1FTVM Unavailable', null, null, this.getTagsForStencil(gn, '1ftvm unavailable', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '1ftvm_warning;',
					w * 34, h * 31, '', '1FTVM Warning', null, null, this.getTagsForStencil(gn, '1ftvm warning', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '2ftvm;',
					w * 34, h * 31, '', '2FTVM', null, null, this.getTagsForStencil(gn, '2ftvm', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '2ftvm_error;',
					w * 34, h * 31, '', '2FTVM Error', null, null, this.getTagsForStencil(gn, '2ftvm error', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '2ftvm_running;',
					w * 34, h * 31, '', '2FTVM Running', null, null, this.getTagsForStencil(gn, '2ftvm running', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '2ftvm_unavailable;',
					w * 34, h * 31, '', '2FTVM Unavailable', null, null, this.getTagsForStencil(gn, '2ftvm unavailable', dt).join(' ')),
			this.createVertexTemplateEntry(sn + '2ftvm_warning;',
					w * 34, h * 31, '', '2FTVM Warning', null, null, this.getTagsForStencil(gn, '2ftvm warning', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'backup_repository;',
					w * 31, h * 31, '', 'Backup Repository', null, null, this.getTagsForStencil(gn, 'backup repository', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'backup_repository_2;',
					w * 31, h * 31, '', 'Backup Repository', null, null, this.getTagsForStencil(gn, 'backup repository', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'cd;',
					w * 34, h * 13, '', 'CD', null, null, this.getTagsForStencil(gn, 'cd', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'database;',
					w * 29, h * 31, '', 'Database', null, null, this.getTagsForStencil(gn, 'database', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'datastore;',
					w * 22, h * 30, '', 'Datastore', null, null, this.getTagsForStencil(gn, 'datastore', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'datastore_snapshot;',
					w * 27, h * 17, '', 'Datastore Snapshot', null, null, this.getTagsForStencil(gn, 'datastore snapshot', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'datastore_volume;',
					w * 27, h * 17, '', 'Datastore Volume', null, null, this.getTagsForStencil(gn, 'datastore volume', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'esx_esxi;',
					w * 19, h * 26, '', 'ESX ESXi', null, null, this.getTagsForStencil(gn, 'esx esxi', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'failover_protective_snapshot;',
					w * 23, h * 23, '', 'Failover Protective Snapshot', null, null, this.getTagsForStencil(gn, 'failover protective snapshot', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'failover_protective_snapshot_locked;',
					w * 28, h * 23, '', 'Failover Protective Snapshot Locked', null, null, this.getTagsForStencil(gn, 'failover protective snapshot locked', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'failover_protective_snapshot_running;',
					w * 29, h * 23, '', 'Failover Protective Snapshot Running', null, null, this.getTagsForStencil(gn, 'failover protective snapshot running', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'free_datastore;',
					w * 22, h * 30, '', 'Free Datastore', null, null, this.getTagsForStencil(gn, 'free datastore', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'full_datastore;',
					w * 22, h * 30, '', 'Full Datastore', null, null, this.getTagsForStencil(gn, 'full datastore', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'hard_drive;fillColor=#637D8A;gradientColor=#324752;strokeColor=none;',
					w * 31, h * 14, '', 'Hard Drive', null, null, this.getTagsForStencil(gn, 'hard drive', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'hyper_v_host;',
					w * 55, h * 49, '', 'Hyper-V Host', null, null, this.getTagsForStencil(gn, 'hyper-v host', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'lost_space;',
					w * 22, h * 30, '', 'Lost Space', null, null, this.getTagsForStencil(gn, 'lost space', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'lun;',
					w * 36, h * 20, '', 'LUN', null, null, this.getTagsForStencil(gn, 'lun', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'medium_datastore;',
					w * 22, h * 30, '', 'Medium Datastore', null, null, this.getTagsForStencil(gn, 'medium datastore', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'network_card;',
					w * 19, h * 20, '', 'Network Card', null, null, this.getTagsForStencil(gn, 'network card', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'physical_storage;',
					w * 54, h * 30, '', 'Physical Storage', null, null, this.getTagsForStencil(gn, 'physical_storage', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'proxy;',
					w * 23, h * 23, '', 'Proxy', null, null, this.getTagsForStencil(gn, 'proxy', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'proxy_appliance;',
					w * 23, h * 23, '', 'Proxy Appliance', null, null, this.getTagsForStencil(gn, 'proxy appliance', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'remote_site;',
					w * 23, h * 30, '', 'Remote Site', null, null, this.getTagsForStencil(gn, 'remote site', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'remote_storage;',
					w * 26, h * 31, '', 'Remote Storage', null, null, this.getTagsForStencil(gn, 'remote storage', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'resource_pool;',
					w * 28, h * 16, '', 'Resource Pool', null, null, this.getTagsForStencil(gn, 'resource pool', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'service_vnic;',
					w * 36, h * 32, '', 'Service vNIC', null, null, this.getTagsForStencil(gn, 'service vnic', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'switch;',
					w * 55, h * 29, '', 'Switch', null, null, this.getTagsForStencil(gn, 'switch', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape;',
					w * 29, h * 29, '', 'Tape', null, null, this.getTagsForStencil(gn, 'tape', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape_checked;',
					w * 35, h * 29, '', 'Tape Checked', null, null, this.getTagsForStencil(gn, 'tape checked', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape_ejecting;',
					w * 35, h * 29, '', 'Tape Ejecting', null, null, this.getTagsForStencil(gn, 'tape ejecting', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape_library;',
					w * 31, h * 37, '', 'Tape Library', null, null, this.getTagsForStencil(gn, 'tape library', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape_licensed;',
					w * 35, h * 29, '', 'Tape Licensed', null, null, this.getTagsForStencil(gn, 'tape licensed', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape_recording;',
					w * 35, h * 29, '', 'Tape Recording', null, null, this.getTagsForStencil(gn, 'tape recording', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'tape_server;',
					w * 23, h * 23, '', 'Tape Server', null, null, this.getTagsForStencil(gn, 'tape server', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vapp;',
					w * 46, h * 31, '', 'vApp', null, null, this.getTagsForStencil(gn, 'vapp', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vapp_started;',
					w * 46, h * 31, '', 'vApp Started', null, null, this.getTagsForStencil(gn, 'vapp started', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_availability_suite;',
					w * 23, h * 23, '', 'Veeam Availability Suite', null, null, this.getTagsForStencil(gn, 'veeam availability suite', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_backup_and_replication_server;',
					w * 23, h * 23, '', 'Veeam Backup and Replication Server', null, null, this.getTagsForStencil(gn, 'veeam backup and replication server', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_backup_enterprise_manager_server;',
					w * 23, h * 23, '', 'Veeam Backup Enterprise Manager Server', null, null, this.getTagsForStencil(gn, 'veeam backup enterprise manager server', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_backup_enterprise_manager_server_2d;',
					w * 20, h * 20, '', 'Veeam Backup Enterprise Manager Server 2D', null, null, this.getTagsForStencil(gn, 'veeam backup enterprise manager derver 2d two dimensional', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_backup_search_server;',
					w * 23, h * 23, '', 'Veeam Backup Search Server', null, null, this.getTagsForStencil(gn, 'veeam backup search server', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_one_business_view;',
					w * 23, h * 23, '', 'Veeam ONE Business View', null, null, this.getTagsForStencil(gn, 'veeam one business view', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_one_monitor;',
					w * 23, h * 23, '', 'Veeam ONE Monitor', null, null, this.getTagsForStencil(gn, 'veeam one monitor', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_one_reporter;',
					w * 23, h * 23, '', 'Veeam ONE Reporter', null, null, this.getTagsForStencil(gn, 'veeam one reporter', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'veeam_one_server;',
					w * 23, h * 23, '', 'Veeam ONE Server', null, null, this.getTagsForStencil(gn, 'veeam one server', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'virtual_machine;',
					w * 23, h * 23, '', 'Virtual Machine', null, null, this.getTagsForStencil(gn, 'virtual machine', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vmware_host;',
					w * 55, h * 49, '', 'VMware Host', null, null, this.getTagsForStencil(gn, 'vmware host', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_failed;',
					w * 28, h * 23, '', 'VM Failed', null, null, this.getTagsForStencil(gn, 'vm failed', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_linux;',
					w * 23, h * 30, '', 'VM Linux', null, null, this.getTagsForStencil(gn, 'vm linux', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_no_network;',
					w * 29, h * 23, '', 'VM No Network', null, null, this.getTagsForStencil(gn, 'vm no network', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_problem;',
					w * 28, h * 23, '', 'VM Problem', null, null, this.getTagsForStencil(gn, 'vm problem', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_running;',
					w * 28, h * 23, '', 'VM Running', null, null, this.getTagsForStencil(gn, 'vm running', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_saved_state;',
					w * 29, h * 24, '', 'VM Saved State', null, null, this.getTagsForStencil(gn, 'vm saved state', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vm_windows;',
					w * 23, h * 30, '', 'VM Windows', null, null, this.getTagsForStencil(gn, 'vm windows', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'vnic;',
					w * 31, h * 31, '', 'vNIC', null, null, this.getTagsForStencil(gn, 'vnic', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'wan_accelerator;',
					w * 23, h * 23, '', 'WAN Accelerator', null, null, this.getTagsForStencil(gn, 'wan accelerator', dt).join(' ')),
			this.createVertexTemplateEntry(sn + 'workstation;',
					w * 38, h * 31, '', 'Workstation', null, null, this.getTagsForStencil(gn, 'workstation', dt).join(' '))
		];
			
		this.addPalette('veeam3D', 'Veeam / 3D', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
	};

	
	
	
	
	
	
	
	
})();
