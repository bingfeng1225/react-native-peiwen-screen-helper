'use strict';

import {PixelRatio, Dimensions, Platform} from 'react-native';

//像素密度
export let BASE_SCALE = 2;
export let BASE_WIDTH = 750 / BASE_SCALE;
export let BASE_HEIGHT = 1334 / BASE_SCALE;

export const SCREEN_SCALE = PixelRatio.get();
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const SCALE_WIDTH = SCREEN_WIDTH / BASE_WIDTH;
const SCALE_HEIGHT = SCREEN_HEIGHT / BASE_HEIGHT;
/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 */
export function scale(size: Number,fixWidth = true) {
    let scale = fixWidth?SCALE_WIDTH:SCALE_HEIGHT;
    return Math.ceil(size * scale) / BASE_SCALE;
}

export function px2dp(size: Number) {
    return size / SCREEN_SCALE;
}

export function isIphone() {
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS
    );
}

export function isAndroid() {
    return Platform.OS === 'android';
}

export function isIphoneX() {
    return (
        isIphone() &&
        (SCREEN_WIDTH === 812 || SCREEN_HEIGHT === 812)
    );
}

export function ifAndroid(androidStyle, regularStyle) {
    if (isAndroid()) {
        return androidStyle;
    }
    return regularStyle;
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}
