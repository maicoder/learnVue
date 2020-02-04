import {request} from "./request";

export function getCategory() {
  return request({
    url: 'category'
  })
}

export function getSubcategory() {
  return request({
    url: 'subcategory',
    params: {
      maitKey
    }
  })
}

export function getSubcategoryDetail(miniWallkey, type) {
  return request({
    url: 'subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
