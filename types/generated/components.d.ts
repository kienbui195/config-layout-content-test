import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentBadgePrice extends Schema.Component {
  collectionName: 'components_component_badge_prices';
  info: {
    displayName: 'Badge Price';
  };
  attributes: {
    background_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    text_settings: Attribute.Component<'init.text-option'>;
  };
}

export interface ComponentButtonInfo extends Schema.Component {
  collectionName: 'components_component_button_infos';
  info: {
    displayName: 'Button Info';
  };
  attributes: {
    content: Attribute.String;
    link_on_click: Attribute.String;
    background_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    button_text: Attribute.Component<'init.text-option'>;
  };
}

export interface ComponentImageCard extends Schema.Component {
  collectionName: 'components_component_image_cards';
  info: {
    displayName: 'Image Card';
  };
  attributes: {
    type_of_thumbnail: Attribute.Enumeration<
      ["product's image", "store's image"]
    > &
      Attribute.DefaultTo<"product's image">;
    link_on_click: Attribute.String & Attribute.DefaultTo<'/'>;
  };
}

export interface ComponentJustButton extends Schema.Component {
  collectionName: 'components_component_just_buttons';
  info: {
    displayName: 'Just Button';
  };
  attributes: {
    background_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    text_settings: Attribute.Component<'init.text-option'>;
  };
}

export interface ComponentPopupList extends Schema.Component {
  collectionName: 'components_component_popup_lists';
  info: {
    displayName: 'Popup List';
  };
  attributes: {
    thumbnail_settings: Attribute.Component<'component.image-card'>;
    show_price_movers: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_discount: Attribute.Boolean & Attribute.DefaultTo<false>;
    text_settings: Attribute.Component<'init.text-option'>;
    price: Attribute.Component<'init.text-option'>;
    price_sale: Attribute.Component<'init.text-option'>;
    show_more_info: Attribute.Boolean & Attribute.DefaultTo<true>;
    button_text: Attribute.Component<'init.text-option'>;
    button_background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ComponentProductInfo extends Schema.Component {
  collectionName: 'components_component_product_infos';
  info: {
    displayName: 'Product Info';
  };
  attributes: {
    kind_of_info: Attribute.Enumeration<
      ['only_title', 'title_and_short_desc', 'title_and_feature', 'full']
    > &
      Attribute.DefaultTo<'only_title'>;
    show_more_info: Attribute.Boolean & Attribute.DefaultTo<true>;
    price: Attribute.Component<'init.text-option'>;
    price_sale: Attribute.Component<'init.text-option'>;
  };
}

export interface InitButtonOption extends Schema.Component {
  collectionName: 'components_init_button_options';
  info: {
    displayName: 'Button Option';
    description: '';
  };
  attributes: {
    text_content: Attribute.Component<'init.text-option'>;
    background: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface InitTextOption extends Schema.Component {
  collectionName: 'components_init_text_options';
  info: {
    displayName: 'Text Option';
    description: '';
  };
  attributes: {
    font_size: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<14>;
    font_weight: Attribute.Enumeration<['thin', 'regular', 'medium', 'bold']> &
      Attribute.DefaultTo<'regular'>;
    font_style: Attribute.Enumeration<['normal', 'italic', 'underline']> &
      Attribute.DefaultTo<'normal'>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface LayoutCard extends Schema.Component {
  collectionName: 'components_layout_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    direction: Attribute.Enumeration<['vertical', 'horizontal']> &
      Attribute.DefaultTo<'horizontal'>;
    limit_product: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: '1';
        },
        string
      > &
      Attribute.DefaultTo<'1'>;
    number_of_cols: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: '1';
        },
        string
      > &
      Attribute.DefaultTo<'1'>;
    show_price_movers: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_discount: Attribute.Boolean & Attribute.DefaultTo<false>;
    thumbnail: Attribute.Component<'component.image-card'> & Attribute.Required;
    info: Attribute.Component<'component.product-info'>;
    button_setting: Attribute.Component<'component.button-info'>;
  };
}

export interface LayoutCompareTable extends Schema.Component {
  collectionName: 'components_layout_compare_tables';
  info: {
    displayName: 'Compare Table';
  };
  attributes: {
    title: Attribute.String;
    limit_product: Attribute.Integer;
    show: Attribute.Enumeration<['badge_price', 'button']> &
      Attribute.DefaultTo<'button'>;
    text_setting: Attribute.Component<'init.text-option'>;
    button_setting: Attribute.Component<'component.button-info'>;
    badge_price_setting: Attribute.Component<'component.badge-price'>;
  };
}

export interface LayoutCoupons extends Schema.Component {
  collectionName: 'components_layout_coupons';
  info: {
    displayName: 'Coupons';
  };
  attributes: {
    title: Attribute.String;
    short_desc: Attribute.Component<'init.text-option'>;
    limit_product: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
  };
}

export interface LayoutGallery extends Schema.Component {
  collectionName: 'components_layout_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    title: Attribute.String;
    limit_product: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
  };
}

export interface LayoutJustButton extends Schema.Component {
  collectionName: 'components_layout_just_buttons';
  info: {
    displayName: 'Just Button';
  };
  attributes: {
    title: Attribute.String;
    limit_product: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    button_setiings: Attribute.Component<'component.just-button'>;
    mode_popup: Attribute.Boolean & Attribute.DefaultTo<false>;
    popup_list_settings: Attribute.Component<'component.popup-list'>;
  };
}

export interface LayoutList extends Schema.Component {
  collectionName: 'components_layout_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    title: Attribute.String;
    limit_product: Attribute.Integer;
    sort: Attribute.Enumeration<
      [
        'title[asc]',
        'title[desc]',
        'rating[asc]',
        'rating[desc]',
        'orders[asc]',
        'orders[desc]',
        'newest',
        'best_choice'
      ]
    > &
      Attribute.DefaultTo<'rating[desc]'>;
    show_rating: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_price_movers: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_discount: Attribute.Boolean & Attribute.DefaultTo<false>;
    thumbnail: Attribute.Component<'component.image-card'>;
    info: Attribute.Component<'component.product-info'>;
    button_setting: Attribute.Component<'component.button-info'>;
  };
}

export interface LayoutTextLink extends Schema.Component {
  collectionName: 'components_layout_text_links';
  info: {
    displayName: 'Text Link';
  };
  attributes: {
    title: Attribute.String;
    sort: Attribute.Enumeration<
      [
        'title[asc]',
        'title[desc]',
        'rating[asc]',
        'rating[desc]',
        'pushlised[asc]',
        'published[desc]',
        'price[asc]',
        'price[desc]',
        'orders[asc]',
        'orders[desc]'
      ]
    > &
      Attribute.DefaultTo<'title[asc]'>;
    price: Attribute.Component<'init.text-option'>;
    price_sale: Attribute.Component<'init.text-option'>;
  };
}

export interface LayoutVideo extends Schema.Component {
  collectionName: 'components_layout_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    title: Attribute.String;
    short_desc_settings: Attribute.Component<'init.text-option'>;
    link_youtube_video: Attribute.String;
  };
}

export interface OptionsOptions extends Schema.Component {
  collectionName: 'components_options_options';
  info: {
    displayName: 'Options';
    description: '';
  };
  attributes: {
    layout_type: Attribute.Enumeration<
      [
        'vertical card',
        'horizontal card',
        'list',
        'chart',
        'table compare',
        'only button',
        'price alert',
        'video',
        'image carousel',
        'image gallery',
        'books',
        'news',
        'coupons'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'horizontal card'>;
    type_of_thumbnail: Attribute.Enumeration<['store', 'prod']> &
      Attribute.DefaultTo<'prod'>;
    sortting: Attribute.Enumeration<
      [
        'rating[asc]',
        'rating[desc]',
        'price[asc]',
        'price[desc]',
        'number of order[asc]',
        'number of order[desc]'
      ]
    > &
      Attribute.DefaultTo<'rating[desc]'>;
    show_thumbnail: Attribute.Boolean & Attribute.DefaultTo<true>;
    show_price: Attribute.Boolean & Attribute.DefaultTo<true>;
    show_price_sale: Attribute.Boolean & Attribute.DefaultTo<true>;
    show_discount: Attribute.Boolean & Attribute.DefaultTo<true>;
    show_feature: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_prod_info: Attribute.Enumeration<
      ['only name', 'name and short description']
    > &
      Attribute.DefaultTo<'name and short description'>;
    limit_prod_show: Attribute.Integer & Attribute.DefaultTo<1>;
    content_button: Attribute.String & Attribute.DefaultTo<'prod name'>;
    show_price_movers: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_rating: Attribute.Boolean & Attribute.DefaultTo<false>;
    show_store_name: Attribute.Boolean & Attribute.DefaultTo<true>;
    show_button: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface OptionsThemeSchema extends Schema.Component {
  collectionName: 'components_options_theme_schemas';
  info: {
    displayName: 'Theme Schema';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'init.text-option'>;
    short_desc: Attribute.Component<'init.text-option'>;
    button: Attribute.Component<'init.button-option'>;
    price: Attribute.Component<'init.text-option'>;
    price_sale: Attribute.Component<'init.text-option'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.badge-price': ComponentBadgePrice;
      'component.button-info': ComponentButtonInfo;
      'component.image-card': ComponentImageCard;
      'component.just-button': ComponentJustButton;
      'component.popup-list': ComponentPopupList;
      'component.product-info': ComponentProductInfo;
      'init.button-option': InitButtonOption;
      'init.text-option': InitTextOption;
      'layout.card': LayoutCard;
      'layout.compare-table': LayoutCompareTable;
      'layout.coupons': LayoutCoupons;
      'layout.gallery': LayoutGallery;
      'layout.just-button': LayoutJustButton;
      'layout.list': LayoutList;
      'layout.text-link': LayoutTextLink;
      'layout.video': LayoutVideo;
      'options.options': OptionsOptions;
      'options.theme-schema': OptionsThemeSchema;
    }
  }
}
