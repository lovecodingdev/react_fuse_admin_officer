import _ from '@lodash';
import mock from '../mock';
import { db, realDb } from './firebase';

const eCommerceDB = {
	entrys: []
};

var belongTo = localStorage.getItem('@BELONGTO')

mock.onGet('/api/e-commerce-app/products').reply(() => new Promise((resolve, reject) => {
	var starCountRef = realDb.ref(`Sales/Entries/`);
	starCountRef.on('value', snapshot => {
		const data = snapshot.val();
		

		Object.keys(data).map(item => {
			eCommerceDB.entrys.push(data[item])
		});
		console.log(eCommerceDB.entrys)
		resolve(eCommerceDB.entrys);
	})
	
}));

mock.onPost('/api/e-commerce-app/remove-products').reply(request => {
	const { productIds } = JSON.parse(request.data);
	eCommerceDB.entrys = eCommerceDB.entrys.filter(product => !productIds.includes(product.id));
	return [200, productIds];
});

mock.onGet('/api/e-commerce-app/product').reply(request => {
	const { productId } = request.params;
	const response = _.find(eCommerceDB.entrys, { id: productId });
	return [200, response];
});

mock.onPost('/api/e-commerce-app/product/save').reply(async request => {
	let data = JSON.parse(request.data);
	let product = null;
	let uid = localStorage.getItem('@UID')
	eCommerceDB.entrys = eCommerceDB.entrys.map(_product => {
		if (_product.id === data.id) {
			product = data;
			return product;
		}
		return _product;
	});

	if (!product) {
		product = data;
		eCommerceDB.entrys = [...eCommerceDB.entrys, product];
	}

	data.policyType.map(item=>{
		data = {...data, sellerId:uid}		
		var id = Date.now()
		if(data.user){
			uid = data.user.uid
		}
		console.log(`Sales/${belongTo}/${item}/${uid}/${id}`)
		realDb.ref(`Sales/${belongTo}/${item}/${uid}/${id}`).set({
			...data, id: id
		});
	})	


	return [200, product];
});

mock.onPost('/api/e-commerce-app/product/update').reply(async request => {
	let data = JSON.parse(request.data);
	let product = null;
	let uid = localStorage.getItem('@UID')
	eCommerceDB.entrys = eCommerceDB.entrys.map(_product => {
		if (_product.id === data.id) {
			product = data;
			return product;
		}
		return _product;
	});

	if (!product) {
		product = data;
		eCommerceDB.entrys = [...eCommerceDB.entrys, product];
	}

	console.log(data)
	
		data = {...data, sellerId:uid}		
		
		if(data.user){
			uid = data.user.uid
		}
		realDb.ref(`Sales/${belongTo}/${data.policyType}/${uid}/${data.id}`).set({
			...data
		});
	


	return [200, product];
});
