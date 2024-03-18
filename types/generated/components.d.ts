import type { Schema, Attribute } from '@strapi/strapi';

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
    font_style: Attribute.Enumeration<['normal', 'italic', 'underline']>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
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
    theme_schema: Attribute.String;
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
      'init.button-option': InitButtonOption;
      'init.text-option': InitTextOption;
      'options.options': OptionsOptions;
      'options.theme-schema': OptionsThemeSchema;
    }
  }
}
